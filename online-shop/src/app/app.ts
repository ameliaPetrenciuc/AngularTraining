import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShoppingCartDetails } from './features/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details';
import { UserInfo } from './features/auth/components/containers/user-info/user-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ShoppingCartDetails,
    UserInfo
],
  styleUrl: './app.scss',
  templateUrl: './app.html'  
})
export class App {
  title = 'online-shop';
}
