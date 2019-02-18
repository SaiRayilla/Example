import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {
  Employee: Object;
  dtTrigger: Subject<any> = new Subject();
  

  constructor(private dataService: EmployeeService,private router: Router) { }
  employee: Employee[] = [];
  empname: String;
  empid:String
  ngOnInit() {
  }
  
  private searchEmployee1() {
   if(this.empid){
    this.dataService.getemployee1(this.empid)
    .subscribe(employee => this.Employee = employee);
    //  setTimeout(() => { this.dtTrigger.next() }, 1000);
   }else{
    this.dataService.getemployee(this.empname)
    .subscribe(employee => this.Employee = employee);
    //  
   }
   setTimeout(() => { this.dtTrigger.next() }, 1000);
}
  
  onSubmit() {
   
   this.searchEmployee1();

  }
  back()
  {
    // this.router.navigate()
    this.router.navigate(["details"]);
  }
}