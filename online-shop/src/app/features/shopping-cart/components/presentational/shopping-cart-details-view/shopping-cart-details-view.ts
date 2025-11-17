import { Component , input, output, ChangeDetectionStrategy} from '@angular/core';
import { Product } from '../../../../shared/types/products.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-details-view',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './shopping-cart-details-view.html',
  styleUrl: './shopping-cart-details-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartDetailsView {
  readonly productsInCart = input<Product[]>([]);
  readonly navigateToCart = output<void>();
  
  showCart() {
    this.navigateToCart.emit();
  }
}
