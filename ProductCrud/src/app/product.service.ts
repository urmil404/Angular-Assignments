import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

// product model
export interface productModel {
  id: number | null;
  name: string;
  price: number;
  type: string;
  owner: string;
  contactNumber: number;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  dataByEvent: EventEmitter<productModel> = new EventEmitter<productModel>();

  constructor() {}

  counter = 0;
  products: productModel[] = [];

  // crud logic for products
  addProduct(payload: productModel) {
    payload.id = this.counter++;
    this.dataByEvent.emit(payload);
  }

  // getAllProducts() {
  //   return this._products;
  // }
}
