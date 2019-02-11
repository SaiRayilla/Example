import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { HttpClientModule } from '@angular/common/http';

import {DataTableModule} from "angular-6-datatable";
import { DataTablesModule } from 'angular-datatables';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponentComponent,
    SearchemployeeComponent,
    TableComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    DataTableModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
