import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesGridComponent } from './employees-grid/employees-grid.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeesCardsComponent } from './employees-cards/employees-cards.component';

@NgModule({
  declarations: [AppComponent, EmployeesGridComponent, EmployeesTableComponent, EmployeesCardsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
