import { ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../../../shared/types/cart-items.types';
import { Product } from '../../../../shared/types/products.types';

@Component({
  selector: 'app-cart-page-view',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart-page-view.html',
  styleUrl: './shopping-cart-page-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartPageView {
  readonly cartItems = input.required<CartItem[]>();
  readonly checkout = output<void>();
  readonly increment = output<Product>();
  readonly decrement = output<string>();
}
