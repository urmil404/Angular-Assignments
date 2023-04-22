import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RankingDirective } from './employee-list/ranking.directive';
import { OfficeComponent } from './office/office.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, EmployeeListComponent, RankingDirective, OfficeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
