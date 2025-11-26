import { createReducer, on } from '@ngrx/store';
import { addToCart, decrementItem} from './cart.actions';
import { initialCartState } from '../types/cart-state';

export const cartReducer = createReducer(
  initialCartState,

  on(addToCart, (state, { product }) => {
    const existingItem = state.items.find(i => i.product.id === product.id);

    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, { product, quantity: 1 }]
      };
    }
  }),

  on(decrementItem, (state, { productId }) => {
    const existingItem = state.items.find(i => i.product.id === productId);

    if (existingItem && existingItem.quantity > 1) {
      return {
        ...state,
        items: state.items.map(item => 
          item.product.id === productId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        )
      };
    } else {
      return {
        ...state,
        items: state.items.filter(i => i.product.id !== productId)
      };
    }
  }),
);