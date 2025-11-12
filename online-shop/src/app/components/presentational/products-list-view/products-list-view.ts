import { Component, Input, Output,  EventEmitter} from '@angular/core';
import { Product } from '../../../types/products.types';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.html',
  styleUrl: './products-list-view.scss',
})
export class ProductsListView {
  @Input() products: Product[] = [];

  @Output() selectProduct = new EventEmitter<Product>();
  onSelect(product: Product) {
    this.selectProduct.emit(product);
  }
}