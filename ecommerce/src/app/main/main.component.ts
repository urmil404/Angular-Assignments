import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  imagePath: string = '../assets/product.jpg';
  productName: string = 'Smart watch';
  productPrice: number = 35;
  cartValue: number = 0;
  counter: number = 0;
  onSale: boolean = true;
  constructor() {}

  @Output() cart = new EventEmitter<number>();

  incrementCart(): void {
    this.counter++;
    this.cart.emit(this.counter);
  }

  decrementCart(): void {
    this.counter > 0 ? this.counter-- : (this.counter = 0);
    this.cart.emit(this.counter);
  }
}
