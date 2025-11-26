import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPageView } from './shopping-cart-page-view';

describe('CartPageView', () => {
  let component: ShoppingCartPageView;
  let fixture: ComponentFixture<ShoppingCartPageView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartPageView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartPageView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
