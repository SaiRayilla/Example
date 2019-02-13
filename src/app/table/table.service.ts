import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TableService {

  private url= 'http://localhost:9090/GetDetails';
  constructor(private http: HttpClient) { }
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
   private base='http://localhost:9090/Delete';
  
  deleteemployee(empid:String):Observable<Object>{
 
    return this.http.delete(`${this.base}/${empid}`)
  }
}