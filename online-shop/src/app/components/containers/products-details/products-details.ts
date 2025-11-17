import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../features/shared/types/products.types';
import { ProductsDetailsView } from '../../presentational/products-details-view/products-details-view';
import { ShoppingCartService } from '../../../features/shopping-cart/services/shopping-cart-service';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../../../mocks/products.mocks';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule, ProductsDetailsView],
  templateUrl: './products-details.html',
  styleUrl: './products-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetails implements OnInit{
  readonly product = signal<Product | undefined>(undefined);
  private readonly cart = inject(ShoppingCartService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    const productIdString = this.route.snapshot.paramMap.get('id');

    if (productIdString) {
        const productId = parseInt(productIdString, 10);
        const foundProduct = productList.find(p => p.id === productId);

        this.product.set(foundProduct);

        if (!foundProduct) {
            console.error(`Product with ID ${productId} not found in mock list.`);
        } 
      } else {
        console.error('Product ID not found in route.');
    }
  }

  onAddToCart(): void {
    const p = this.product();
    if (!p) 
      return;

    this.cart.addProduct(p);
    console.log(`Added product: ${p.name}`);
  }
}

