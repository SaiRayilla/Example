import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

const routes: Routes = [
    { path: '', component: EmployeeComponentComponent },
    { path: 'details', component: TableComponent },
    { path: 'findbyname', component: SearchemployeeComponent },
    { path: 'login',component:LoginComponent},
    { path: 'update', component: UpdateComponentComponent },
   
      
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

