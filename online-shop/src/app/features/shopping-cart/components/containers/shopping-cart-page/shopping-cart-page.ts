import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShoppingCartPageView } from '../../presentational/shopping-cart-page-view/shopping-cart-page-view';
import { ShoppingCartService } from '../../../services/shopping-cart-service';

@Component({
  selector: 'app-shopping-cart-page',
  imports: [ShoppingCartPageView],
  templateUrl: './shopping-cart-page.html',
  styleUrl: './shopping-cart-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartPage {
  readonly cartService = inject(ShoppingCartService);
}
