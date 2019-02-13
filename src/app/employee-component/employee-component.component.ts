import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  employee: Employee = new Employee();
  submitted: boolean;
  constructor(private employeeService: EmployeeService) { }

 
  ngOnInit() {
    
  }
  newCustomer(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    debugger
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
    
  }
}

