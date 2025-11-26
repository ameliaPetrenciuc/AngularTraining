import { Component, input, output, ChangeDetectionStrategy} from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { Product } from '../../../../shared/types/products.types';
import { UserProfile } from '../../../../shared/types/user.types';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products-list-view',
  standalone: true,
  imports: [CurrencyPipe, MatButtonModule, MatCardModule],
  templateUrl: './products-list-view.html',
  styleUrl: './products-list-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListView {
  readonly products = input<Product[]>([]);
  readonly selectProduct = output<Product>();
  readonly addProduct = output<void>();
  readonly user = input<UserProfile | null>(null);

  protected onSelect(product: Product): void {
    this.selectProduct.emit(product);
  }
}
