import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../types/products.types';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.html',
  styleUrl: './products-details.scss',
})
export class ProductsDetails {
  @Input() product?: Product;
}
