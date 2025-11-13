import { Component } from '@angular/core';
import { productList } from '../../../mocks/products.mocks';
import { ProductsListView } from '../../presentational/products-list-view/products-list-view';
import { ProductsDetails } from '../../containers/products-details/products-details';
import { Product } from '../../../features/shared/types/products.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductsListView,  ProductsDetails],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {
  protected readonly products= productList

  protected selectedProduct?: Product;

  protected onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }
}
