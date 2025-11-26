import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsFormView } from '../../presentational/products-form-view/products-form-view';
import { ProductCategory } from '../../../../shared/types/product-category.types';
import { ProductCategoryService } from '../../../services/product-category.service';
import { Product } from '../../../../shared/types/products.types';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [ProductsFormView],
  templateUrl: './products-form.html',
  styleUrl: './products-form.scss',
})
export class ProductsForm implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly productsService = inject(ProductsService);
  private readonly productCategoryService = inject(ProductCategoryService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly categories = signal<ProductCategory[]>([]);
  productId: string | null = null;

  readonly productForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]], 
    description: [''],
    weight: [0, [Validators.required, Validators.min(0)]],
    categoryId: ['', Validators.required]
  });

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.productCategoryService.getAll().subscribe(cats => {
      this.categories.set(cats);
    });

    if (this.productId) {
      this.productsService.getById(this.productId).subscribe(product => {
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          description: product.description,
          weight: product.weight,
          categoryId: product.category?.id 
        });
      });
    }
  }

  protected onSave(): void {
    if (this.productForm.invalid) 
      return;

    const productData = this.productForm.value as Product;

    if (this.productId){
      this.productsService.update(this.productId, productData)
        .subscribe({
          next: () => {
            this.router.navigate(['/products', this.productId]);
          },
          error: (err) => console.error('Update failed', err)
        });
    } else {
      this.productsService.create(productData)
        .subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (err) => console.error('Create failed', err)
        });
    }
  }

  protected onCancel(): void {
    if (this.productId) {
        this.router.navigate(['/products', this.productId]);
    } else {
        this.router.navigate(['/products']);
    }
  }
}
