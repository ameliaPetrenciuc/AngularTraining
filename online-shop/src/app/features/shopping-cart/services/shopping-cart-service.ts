import { Injectable, signal } from '@angular/core';
import { Product } from '../../shared/types/products.types';
import { CartItem } from '../../shared/types/cart-items.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  readonly productsInCart = signal<CartItem[]>([]);

  addProduct(product: Product): void {
    this.productsInCart.update(items=>{
      const existingItem = items.find(item => item.product.id === product.id);

      if (existingItem) {
        return items.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 }:item);
      }
      return [...items, { product, quantity: 1 }];
    });
  }
}
