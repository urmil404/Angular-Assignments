import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

export interface carsData {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div
            class="d-flex fx-row bg-dark my-5 text-white rounded"
            *ngFor="let car of cars"
          >
            <app-product-item
              [carsdata]="car"
              (increment)="incrementCart($event)"
              (decrement)="decrementCart($event)"
            >
            </app-product-item>
          </div>
          <button href="#" class="btn btn-warning d-block" (click)="onCart()">
            Book Now
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .counter {
        display: flex;
        margin: 5%;
        margin-left: auto;
      }
      .inputFixed {
        width: 20%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  cars: carsData[] = [];
  ngOnInit(): void {
    this.cars = [
      {
        id: 1,
        name: 'Ferrari',
        price: 5,
        quantity: 0,
        img: '../assets/car1.jpg',
      },
      {
        id: 2,
        name: 'Porsche',
        price: 3,
        quantity: 0,
        img: './assets/car2.jpg',
      },
      {
        id: 3,
        name: 'Mercedes',
        price: 4,
        quantity: 0,
        img: './assets/car3.jpg',
      },
    ];
  }

  counter: number = 0;
  @Output() cart = new EventEmitter<object>();

  incrementCart(id: number) {
    const product = this.cars.find((val) => val.id === id)!;
    product.quantity = product.quantity + 1;
    this.cart.emit(product);
  }

  decrementCart(id: number) {
    const product = this.cars.find((val) => val.id === id)!;
    product.quantity = product.quantity - 1;
    this.cart.emit(product);
  }

  onCart() {
    console.log('Car Added');
  }
}
