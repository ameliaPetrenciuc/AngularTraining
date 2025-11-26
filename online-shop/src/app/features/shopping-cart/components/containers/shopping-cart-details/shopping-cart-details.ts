import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartDetailsView } from '../../presentational/shopping-cart-details-view/shopping-cart-details-view';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartItems } from '../../../../shared/state/cart.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-details',
  standalone: true,
  imports: [ShoppingCartDetailsView, AsyncPipe],
  templateUrl: './shopping-cart-details.html',
  styleUrl: './shopping-cart-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartDetails {
  private readonly router = inject(Router); 
  private readonly store = inject(Store);
  cartItems$ = this.store.select(selectCartItems);
  
  protected onNavigateToCart(): void {
      this.router.navigate(['/cart']);
  }
}
