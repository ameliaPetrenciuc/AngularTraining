import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShoppingCartDetails } from './features/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ShoppingCartDetails
  ],
  styleUrl: './app.scss',
  templateUrl: './app.html'  
})
export class App {
  title = 'online-shop';
}
