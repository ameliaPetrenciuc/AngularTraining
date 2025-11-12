import { Component } from '@angular/core';
import { productList } from '../../../mocks/products.mocks';
import { Product } from '../../../types/products.types';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {
  products= productList

  selectedProduct?: Product;

  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }
}