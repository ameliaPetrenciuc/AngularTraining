import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductCategory } from '../../../../shared/types/product-category.types';

@Component({
  selector: 'app-products-form-view',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './products-form-view.html',
  styleUrl: './products-form-view.scss',
})
export class ProductsFormView {
  readonly formGroup = input.required<FormGroup>();
  readonly categories = input<ProductCategory[]>([]);
  readonly isEditMode = input<boolean>(false);
  readonly save = output<void>();
  readonly cancel = output<void>();
}
