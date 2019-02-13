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
    if(this.id == 'admin' && this.pswd =='admin' ){
     this.router.navigate(["details"]);
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
