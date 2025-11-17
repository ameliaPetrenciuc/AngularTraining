import { Component, input, output, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common'
import { Product } from '../../../features/shared/types/products.types';

@Component({
  selector: 'app-products-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list-view.html',
  styleUrl: './products-list-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListView {
  readonly products = input<Product[]>([]);
  readonly selectProduct = output<Product>();

  onSelect(product: Product): void {
    this.selectProduct.emit(product);
  }
}
