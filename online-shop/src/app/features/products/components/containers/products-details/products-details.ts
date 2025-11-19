import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../../shared/types/products.types';
import { ProductsDetailsView } from '../../presentational/products-details-view/products-details-view';
import { ShoppingCartService } from '../../../../shopping-cart/services/shopping-cart-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [ProductsDetailsView],
  templateUrl: './products-details.html',
  styleUrl: './products-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetails implements OnInit {
  readonly product = signal<Product | undefined>(undefined);
  private readonly cart = inject(ShoppingCartService);
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  private router = inject(Router);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.productsService.getById(id).subscribe({
      next: (p) => {
        this.product.set(p);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  protected onAddToCart(): void {
    const p = this.product();
    if (!p) 
      return;
    this.cart.addProduct(p);
  }

  protected onDeleteProduct(): void {
    const p = this.product();
    if (!p) 
      return;

    if (!confirm(`Are you sure you want to delete ${p.name}?`)) {
      return;
    }

    this.productsService.delete(p.id).subscribe({
      next: () => {
        alert('Product deleted successfully!');
        this.router.navigate(['/products']);
      },
      error: (err) => console.error(err),
    });
  }

  protected onEditProduct(): void {
    const p = this.product();
    if (p) {
      this.router.navigate(['/products/edit', p.id]);
    }
  }
}
