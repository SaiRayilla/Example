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
    // this.router.navigate()
    this.router.navigate(["login"]);
  }
  back1()
  {
    // this.router.navigate()
    this.router.navigate(["login"]);
  }
  }





