import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateProductDirective } from './create-product/create-product.directive';
import { FormsModule } from '@angular/forms';
import { ExponentialPricePipe } from './product-list/exponential-price.pipe';
import { ConvertPipe } from './pipes/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    CreateProductComponent,
    CreateProductDirective,
    ExponentialPricePipe,
    ConvertPipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
