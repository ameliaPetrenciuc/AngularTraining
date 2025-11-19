import { Component, input, output, ChangeDetectionStrategy} from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { Product } from '../../../../shared/types/products.types';

@Component({
  selector: 'app-products-list-view',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-list-view.html',
  styleUrl: './products-list-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListView {
  readonly products = input<Product[]>([]);
  readonly selectProduct = output<Product>();
  readonly addProduct = output<void>();

  protected onSelect(product: Product): void {
    this.selectProduct.emit(product);
  }
}
