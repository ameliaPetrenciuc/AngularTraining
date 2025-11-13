import { Component } from '@angular/core';
import { ProductsList } from './components/containers/products-list/products-list';
import { ShoppingCartDetails } from './features/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductsList, 
    ShoppingCartDetails,
  ],
  styleUrl: './app.scss',
  templateUrl: './app.html'  
})
export class App {
  title = 'online-shop';
}
