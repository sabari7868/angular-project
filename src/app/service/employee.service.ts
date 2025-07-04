import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url_get_list = "http://localhost:8080/list";
  private url_get_emp = "http://localhost:8080/employee/";
  private url_get_emp_name='http://localhost:8080/employee-name/'
  private url_add = "http://localhost:8080/add";
  private url_upd = "http://localhost:8080/update/";
  private url_del = "http://localhost:8080/delete/";


  constructor(private httpClient : HttpClient) { }

  getEmployeeList():Observable<Employee[]>
  {
     return this.httpClient.get<Employee[]>(this.url_get_list)
  }

  addEmployee(employee: Employee):Observable<any>
  {
    return this.httpClient.post(this.url_add,employee);
  }

  getEmployee(id: number):Observable<Employee>
  {
     return this.httpClient.get<Employee>(this.url_get_emp+id)
  }

  getEmployeeByName(name: string):Observable<Employee[]>
  {
     return this.httpClient.get<Employee[]>(this.url_get_emp_name+name)
  }

  updateEmployee(id: number, employee: Employee ):Observable<any>
  {
    return this.httpClient.put(this.url_upd+id,employee);
  }

  deleteEmployee(id : number):Observable<any>
  {
    return this.httpClient.delete(this.url_del+id)
  }
}
