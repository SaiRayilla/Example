import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  employee: Employee = new Employee();
  submitted: boolean;
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
    this.employee.empid = (JSON.parse(localStorage.getItem('Instutite_id')));
    this.employee.empname = (JSON.parse(localStorage.getItem('Instutite_name')));
    this.employee.contactnumber = (JSON.parse(localStorage.getItem('Instutite_number')));
    this.employee.alternatemobilenbr = (JSON.parse(localStorage.getItem('Instutite_altnumber')));
    this.employee.officemailid = (JSON.parse(localStorage.getItem('Instutite_mail')));
    this.employee.personalmailid = (JSON.parse(localStorage.getItem('Instutite_pmail')));
    this.employee.address = (JSON.parse(localStorage.getItem('Instutite_add')));
    this.employee.permanentaddress = (JSON.parse(localStorage.getItem('Instutite_padd')));
    this.employee.skills = (JSON.parse(localStorage.getItem('Instutite_ski')));
    this.employee.experience = (JSON.parse(localStorage.getItem('Instutite_exp')));
    this.employee.dob = (JSON.parse(localStorage.getItem('Instutite_dob')));
    this.employee.doj = (JSON.parse(localStorage.getItem('Instutite_doj')));    
  }
  update() {
    debugger;
    this.employeeService.updateemployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
  //  this.employee =new Employee();
  
  }
 
  onSubmit() {
    this.submitted = true;
    this.update();
    this.router.navigate(["details"]);
  }

}
