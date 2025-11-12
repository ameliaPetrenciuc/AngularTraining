import { Component, Input} from '@angular/core';
import { Product } from '../../../types/products.types';

@Component({
  selector: 'app-products-details-view',
  standalone: false,
  templateUrl: './products-details-view.html',
  styleUrl: './products-details-view.scss',
})
export class ProductsDetailsView {
  @Input() product?: Product;
}