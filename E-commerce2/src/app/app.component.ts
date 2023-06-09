import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-commerce2';
  @Input() carsList!: Array<Object>;
  carsListApp: Object = {};
  getCarsValue(cart: number) {
    this.carsListApp = cart;
  }
}
