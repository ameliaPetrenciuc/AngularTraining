import { Component, input, output} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../../shared/types/products.types';
import { UserProfile } from '../../../../shared/types/user.types';

@Component({
  selector: 'app-products-details-view',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-details-view.html',
  styleUrl: './products-details-view.scss',
})
export class ProductsDetailsView {
  readonly product = input.required<Product>();
  readonly addToCart = output<Product>();
  readonly deleteProduct = output<void>();
  readonly editProduct = output<void>();
  readonly user = input<UserProfile | null>(null);
}
