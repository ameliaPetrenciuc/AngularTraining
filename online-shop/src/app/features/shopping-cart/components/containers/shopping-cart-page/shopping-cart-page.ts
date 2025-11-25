import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShoppingCartPageView } from '../../presentational/shopping-cart-page-view/shopping-cart-page-view';
import { Store } from '@ngrx/store';
import { Product } from '../../../../shared/types/products.types';
import { addToCart, decrementItem } from '../../../../shared/state/cart.actions';
import { selectCartItems, selectCartTotalPrice } from '../../../../shared/state/cart.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-page',
  imports: [ShoppingCartPageView, AsyncPipe],
  templateUrl: './shopping-cart-page.html',
  styleUrl: './shopping-cart-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartPage {
  readonly store = inject(Store);
  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotalPrice);

  protected increment(product: Product) {
    this.store.dispatch(addToCart({ product }));
  }

  protected decrement(productId: string) {
    this.store.dispatch(decrementItem({ productId }));
  }
}
