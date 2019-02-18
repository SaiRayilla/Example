import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl1 = 'http://localhost:9090/data';
  private url= 'http://localhost:9090/Getdata';
  private target='http://localhost:9090/GetDetailbyId';
 
  private base1='http://localhost:9090/update';
  constructor(private http: HttpClient) { }
  
  createEmployee(Employee: Object) {
    return this.http.post(`${this.baseUrl1}`,Employee);
  }
  getemployee(empname: String){
    return this.http.get(`${this.url}/${empname}`);
  }
  getemployee1(empid: String){
    return this.http.get(`${this.target}/${empid}`);
  }
  getEmployeeList(){
    return this.http.get(`${this.url}`);
  }
  
  updateemployee(Employee: Object){
    return this.http.put(`${this.base1}`,Employee)
  }
}