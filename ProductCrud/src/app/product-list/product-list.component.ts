import {
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductService, productModel } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, DoCheck {
  // products: productModel[] = [];
  products: any;
  constructor(public _productService: ProductService) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this._productService.dataByEvent.subscribe((response) => {
      console.log(response);
    });
  }

  ngDoCheck() {
    console.log('ProductList Changes');
  }

  // updateProduct(id: number, event: Event) {
  //   event.preventDefault();
  //   let productToBeUpdated: any = this._productService.updateProduct(id);
  //   this._productService.eventAddProduct.emit(productToBeUpdated);
  // }

  // // Deleting product
  // deleteProduct(id: number, event: Event) {
  //   event.preventDefault();
  //   this.productService.removeProduct(id);
  //   this.products = this.productService.getProducts();
  // }
}
