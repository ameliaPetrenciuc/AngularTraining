import { Component , Input} from '@angular/core';
import { Product } from '../../../../shared/types/products.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-details-view',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './shopping-cart-details-view.html',
  styleUrl: './shopping-cart-details-view.scss',
})
export class ShoppingCartDetailsView {
  @Input() productsInCart: Product[] = [];
}
