import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../features/shared/types/products.types';
import { ProductsDetailsView } from '../../presentational/products-details-view/products-details-view';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule, ProductsDetailsView],
  templateUrl: './products-details.html',
  styleUrl: './products-details.scss',
})
export class ProductsDetails {
  @Input() product?: Product;
}
