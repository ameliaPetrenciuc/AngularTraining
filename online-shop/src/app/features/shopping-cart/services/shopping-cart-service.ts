import { Injectable, signal } from '@angular/core';
import { Product } from '../../shared/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  readonly productsInCart = signal<Product[]>([]);

  addProduct(product: Product): void {
    this.productsInCart.update(products =>{
      const updated = [...products, product];
      console.log('Current cart:', updated);
      return updated;
    });
  }
}
