import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartDetailsView } from '../../presentational/shopping-cart-details-view/shopping-cart-details-view';
import { ShoppingCartService } from '../../../services/shopping-cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-details',
  standalone: true,
  imports: [ShoppingCartDetailsView],
  templateUrl: './shopping-cart-details.html',
  styleUrl: './shopping-cart-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartDetails {
  private readonly router = inject(Router); 
  readonly cart = inject(ShoppingCartService);

 protected onNavigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}
