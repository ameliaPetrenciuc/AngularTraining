import { Component, Input, Output,  EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common'
import { Product } from '../../../features/shared/types/products.types';

@Component({
  selector: 'app-products-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list-view.html',
  styleUrl: './products-list-view.scss',
})
export class ProductsListView {
  @Input() products: Product[] = [];

  @Output() readonly selectProduct = new EventEmitter<Product>();
  onSelect(product: Product): void {
    this.selectProduct.emit(product);
  }
}
