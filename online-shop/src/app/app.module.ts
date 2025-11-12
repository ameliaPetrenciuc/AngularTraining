import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './components/products.module';
import { App } from './app';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    ProductsModule
  ],
  bootstrap: [App]
})
export class AppModule {}
