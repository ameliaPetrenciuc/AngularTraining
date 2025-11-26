import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/types/products.types';

export const addToCart = createAction('[Cart] Add Product', props<{ product: Product }>() );

export const decrementItem = createAction('[Cart] Decrement Item',props<{ productId: string }>());