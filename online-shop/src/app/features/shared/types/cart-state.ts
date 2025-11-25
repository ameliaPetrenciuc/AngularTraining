import { CartItem } from './cart-items.types';

export interface CartState {
  items: CartItem[];
}

export const initialCartState: CartState = {
  items: []
};
