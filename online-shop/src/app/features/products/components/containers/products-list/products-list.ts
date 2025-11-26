import { Component, signal, ChangeDetectionStrategy, computed, inject, OnInit } from '@angular/core';
import { ProductsListView } from '../../presentational/products-list-view/products-list-view';
import { Product } from '../../../../shared/types/products.types';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { AuthService } from '../../../../../services/auth-service';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductsListView, AsyncPipe, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList implements OnInit{
  private readonly router = inject(Router);
  private productService = inject(ProductsService);
  protected authService = inject(AuthService);
  protected readonly products = signal<Product[]>([]);
  protected readonly searchText = signal<string>('');

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => this.products.set(products),
      error: (err) => console.error('Failed to load products', err)
    });
  }

  protected onProductSelected(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  protected readonly filteredProducts = computed<Product[]>(() => {
    const filter = this.searchText().toLowerCase();
    const allProducts = this.products(); 

    if (!filter) {
      return allProducts;
    }

    return allProducts.filter(p => 
      p.name.toLowerCase().includes(filter) 
    );  
  });

  protected updateSearchText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchText.set(value);
  }

  protected onAddProduct(): void {
    this.router.navigate(['/products/add']);  
  }
}
