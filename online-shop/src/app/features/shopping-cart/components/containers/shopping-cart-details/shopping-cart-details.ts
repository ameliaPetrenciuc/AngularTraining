import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDetailsView } from '../../presentational/shopping-cart-details-view/shopping-cart-details-view';
import { ShoppingCartService } from '../../../services/shopping-cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-details',
  standalone:true,
  imports: [CommonModule, ShoppingCartDetailsView],
  templateUrl: './shopping-cart-details.html',
  styleUrl: './shopping-cart-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartDetails {
  private router = inject(Router); 
  readonly cart = inject(ShoppingCartService);

  onNavigateToCart(): void {
        this.router.navigate(['/cart']);
    }
}
