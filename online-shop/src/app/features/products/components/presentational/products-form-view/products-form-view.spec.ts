import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormView } from './products-form-view';

describe('ProductsFormView', () => {
  let component: ProductsFormView;
  let fixture: ComponentFixture<ProductsFormView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFormView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFormView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
