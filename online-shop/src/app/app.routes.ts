import { Routes } from '@angular/router';
import { ProductsList } from './features/products/components/containers/products-list/products-list';
import { ProductsDetails } from './features/products/components/containers/products-details/products-details';
import { ShoppingCartPage } from './features/shopping-cart/components/containers/shopping-cart-page/shopping-cart-page';
import { ProductsForm } from './features/products/components/containers/products-form/products-form';
import { LoginPage } from './features/auth/components/containers/login-page/login-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' }, 
    { path: 'auth/login', component: LoginPage },
    { path: 'products', component: ProductsList }, 
    { path: 'products/add', component: ProductsForm },
    { path: 'products/:id', component: ProductsDetails, },
    { path: 'cart', component: ShoppingCartPage, canActivate: [authGuard], data: { expectedRole: 'CUSTOMER' }},
    { path: 'products/edit/:id', component: ProductsForm}
];
