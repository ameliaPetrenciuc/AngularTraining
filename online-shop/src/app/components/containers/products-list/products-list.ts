import { Component, signal, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { productList } from '../../../mocks/products.mocks';
import { ProductsListView } from '../../presentational/products-list-view/products-list-view';
import { Product } from '../../../features/shared/types/products.types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductsListView],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
  private router = inject(Router);
  protected readonly products = signal<Product[]>(productList);
  protected readonly searchText = signal<string>('');

  protected onProductSelected(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  protected readonly filteredProducts = computed<Product[]>(() => {
    console.log(`Searched: ${this.searchText()}`);

    const filter = this.searchText().toLowerCase();
    const allProducts = this.products(); 

    if (!filter) {
      return allProducts;
    }

    return allProducts.filter(p => 
      p.name.toLowerCase().includes(filter) 
    );  
  });

  public updateSearchText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    console.log(`Value: ${value}`);
    this.searchText.set(value);
  }
}
