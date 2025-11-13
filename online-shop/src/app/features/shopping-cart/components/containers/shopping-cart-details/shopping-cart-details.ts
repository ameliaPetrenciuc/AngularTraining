import { Component } from '@angular/core';
import { Product } from '../../../../shared/types/products.types';
import { CommonModule } from '@angular/common';
import { ShoppingCartDetailsView } from '../../presentational/shopping-cart-details-view/shopping-cart-details-view';

@Component({
  selector: 'app-shopping-cart-details',
  standalone:true,
  imports: [CommonModule, ShoppingCartDetailsView],
  templateUrl: './shopping-cart-details.html',
  styleUrl: './shopping-cart-details.scss',
})
export class ShoppingCartDetails {
  protected readonly productsInCart: Product[] = [];

  addProduct(product: Product): void {
    this.productsInCart.push(product);
  }
}
