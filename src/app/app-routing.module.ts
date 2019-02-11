import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
    { path: '', component: EmployeeComponentComponent },
    { path: 'login/details', component: TableComponent },
    { path: 'login/details/findbyname', component: SearchemployeeComponent },
    { path: 'login',component:LoginComponent},
   
      
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

