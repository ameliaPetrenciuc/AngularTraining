import { Routes } from '@angular/router';
import { ProductsList } from './components/containers/products-list/products-list';
import { ProductsDetails } from './components/containers/products-details/products-details';
import { ShoppingCartPageView } from './features/shopping-cart/components/presentational/shopping-cart-page-view/shopping-cart-page-view';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' }, 
    { path: 'products', component: ProductsList }, 
    { path: 'products/:id', component: ProductsDetails},
    { path: 'cart', component: ShoppingCartPageView },
];
