import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../features/shared/types/products.types';

@Component({
  selector: 'app-products-details-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details-view.html',
  styleUrl: './products-details-view.scss',
})
export class ProductsDetailsView {
  @Input() product!: Product;
}
