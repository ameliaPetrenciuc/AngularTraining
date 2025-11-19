import { Component , input, output, ChangeDetectionStrategy, signal, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../../shared/types/cart-items.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  standalone: true,
  imports:[],
  templateUrl: './shopping-cart-details-view.html',
  styleUrl: './shopping-cart-details-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartDetailsView {
  readonly cartItems = input.required<CartItem[]>();  
  readonly navigateToCart = output<void>();
  
  protected showCart(): void {
    this.navigateToCart.emit();
  }
}
