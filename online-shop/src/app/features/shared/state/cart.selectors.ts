import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../types/cart-state';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items 
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
);

