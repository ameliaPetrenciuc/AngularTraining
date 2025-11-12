import { Component } from '@angular/core';
import { ProductsList} from './components/containers/products-list/products-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsList],
  styleUrl: './app.scss',
  templateUrl: './app.html'  

})
export class App {
  title ='online-shop';
}
