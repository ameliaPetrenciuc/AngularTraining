import { Component, Input } from '@angular/core';
import { Product } from '../../../types/products.types';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.html',
  styleUrl: './products-details.scss',
})
export class ProductsDetails {
  @Input() product?: Product;
}