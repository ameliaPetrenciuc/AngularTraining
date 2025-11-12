import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsList } from './containers/products-list/products-list';
import { ProductsDetails } from './containers/products-details/products-details';
import { ProductsListView } from './presentational/products-list-view/products-list-view';
import { ProductsDetailsView } from './presentational/products-details-view/products-details-view';

@NgModule({
  declarations: [
    ProductsList,
    ProductsDetails,
    ProductsListView,
    ProductsDetailsView
  ],
  imports: [CommonModule],
  exports: [ProductsList] 
})
export class ProductsModule {}
