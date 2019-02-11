import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Update(): any {
    throw new Error("Method not implemented.");
  }
 
 
  private baseUrl1 = 'http://localhost:9090/data';
  private url= 'http://localhost:9090/Getdata';
  private target='http://localhost:9090/GetDetailbyId';
  private base='http://localhost:9090/';
  constructor(private http: HttpClient) { }
  
  createEmployee(Employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`,Employee);
  }
 
  getemployee(empname: String): Observable<Object> {
    return this.http.get(`${this.url}/${empname}`);
  }
  getemployee1(empid: String): Observable<Object> {
    return this.http.get(`${this.target}/${empid}`);
  }
  
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  getemployee2(empid: String,empname:String): Observable<Object> {
    return this.http.get(`${this.target}/${empid}/${empname}`);
  }
  updateEmployee(employee: Employee) {  
    return this.http.put(this.base + '/' + employee.empid, employee);  
  }
}