import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pswd: string;
  id: string;
  empid: string;
  empname: string;
  employee: any;
 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login()  {
    if(this.id== this.employee.empid && this.pswd == this.employee.empname){
     this.router.navigate(["login/details"]);
    }else {
      alert("Invalid credentials");
      this.id='';
      this.pswd='';
    }
    }
    back(){
      this.router.navigate([""]);
    }
    
}
