import { Component } from '@angular/core';
import { ProductService, productModel } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  constructor(private _productService: ProductService) {}

  // initProductModel: productModel = {
  //   id: null,
  //   name: '',
  //   price: 0,
  //   type: '',
  //   owner: '',
  //   contactNumber: 0,
  //   email: '',
  // };

  // product: productModel = this.initProductModel;

  // add product
  // addProduct() {
  //   this._productService.addProduct(this.product);

  //   // creating fields empty
  //   this.product = {
  //     id: null,
  //     name: '',
  //     price: 0,
  //     type: '',
  //     owner: '',
  //     contactNumber: 0,
  //     email: '',
  //   };
  // }

  // remove product
  removeProduct() {}

  //update product
  updateProduct() {}
}
