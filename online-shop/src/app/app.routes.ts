import { Routes } from '@angular/router';
import { ProductsList } from './features/products/components/containers/products-list/products-list';
import { ProductsDetails } from './features/products/components/containers/products-details/products-details';
import { ShoppingCartPage } from './features/shopping-cart/components/containers/shopping-cart-page/shopping-cart-page';
import { ProductsForm } from './features/products/components/containers/products-form/products-form';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' }, 
    { path: 'products', component: ProductsList }, 
    { path: 'products/add', component: ProductsForm },
    { path: 'products/:id', component: ProductsDetails},
    { path: 'cart', component: ShoppingCartPage},
    { path: 'products/edit/:id', component: ProductsForm}
];
