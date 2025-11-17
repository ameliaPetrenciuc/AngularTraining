import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart-service';
import { CommonModule } from '@angular/common';
import { ProductsListView } from '../../../../../components/presentational/products-list-view/products-list-view';

@Component({
  selector: 'app-cart-page-view',
  imports: [CommonModule, ProductsListView],
  templateUrl: './shopping-cart-page-view.html',
  styleUrl: './shopping-cart-page-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartPageView {
  private readonly cart = inject(ShoppingCartService);

  readonly productsInCart = this.cart.productsInCart;
}
