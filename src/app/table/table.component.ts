import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { TableService } from './table.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements  OnInit {

  dtTrigger: Subject<any> = new Subject();
  employee: Employee[] = [];
  empid: any;
  Employee: Object;

  constructor(private http: TableService,private router:Router ){}
  ngOnInit()
  {
  this.searchEmployee1();
  }
  private searchEmployee1() {
    this.http. getEmployeeList()
      .subscribe(employee => this.employee = employee);
      setTimeout(() => { this.dtTrigger.next() }, 1000);
  }
  back()
  {
    this.router.navigate(["login"]);
  }
  onEdit(person)
{
debugger
localStorage.setItem('Instutite_id',JSON.stringify(person.empid));
localStorage.setItem('Instutite_name',JSON.stringify(person.empname));
localStorage.setItem('Instutite_number',JSON.stringify(person.contactnumber));
localStorage.setItem('Instutite_altnumber',JSON.stringify(person.alternatemobilenbr));
localStorage.setItem('Instutite_mail',JSON.stringify(person.officemailid));
localStorage.setItem('Instutite_pmail',JSON.stringify(person.personalmailid));
localStorage.setItem('Instutite_add',JSON.stringify(person.address));
localStorage.setItem('Instutite_padd',JSON.stringify(person.permanentaddress));
localStorage.setItem('Instutite_ski',JSON.stringify(person.skills));
localStorage.setItem('Instutite_exp',JSON.stringify(person.experience));
localStorage.setItem('Instutite_dob',JSON.stringify(person.dob));
localStorage.setItem('Instutite_doj',JSON.stringify(person.doj));
this.router.navigate(["update"]);
}

onSubmit(person){
  debugger; 
  let data=person.empid;
  this.http.deleteemployee(data).subscribe(employee => this.Employee = employee); 
  this.pageRefresh();
  alert("Employee Data is Deleted sucessfully");
}
 
pageRefresh() {
  location.reload();
}
}






