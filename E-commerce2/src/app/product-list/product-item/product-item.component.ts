import { carsData } from './../product-list.component';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductITemComponent {
  @Input() carsdata!: carsData;
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();

  incrementCart(id: number) {
    this.increment.emit(id);
  }

  decrementCart(id: number) {
    this.decrement.emit(id);
  }

  changeDetection() {
    console.log('child component rendered');
  }
}
