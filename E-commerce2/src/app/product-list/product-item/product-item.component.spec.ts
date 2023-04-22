import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductITemComponent } from './product-item.component';

describe('ProductITemComponent', () => {
  let component: ProductITemComponent;
  let fixture: ComponentFixture<ProductITemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductITemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductITemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
