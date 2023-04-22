import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { FormsModule } from '@angular/forms';
import { FruitsDirective } from './fruits.directive';
import { VitaminPipe } from './create-fruit/vitamin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateFruitComponent,
    FruitsDirective,
    VitaminPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
