import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  employees!: Employee[] 
  searchInput!: string;
  
  constructor(private employeeService: EmployeeService, private router:Router){}

  ngOnInit(): void {
 
   this.getList()  
  }
  
  private getList()
  {
    this.employeeService.getEmployeeList().subscribe(
      data => {        
        console.log(data);
        this.employees = data;
      },
      err => {
        console.log(err);
      });
  }

  viewEmployee(id : number)
  {
    this.router.navigate(['employee-details',id])
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);

  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data =>
      {
        console.log(data);  
        this.getList();
      },err => console.log(err))
  }


  filterEmployees(text: string) {
    if (!text) {
      this.getList();
    }
    else
    {
    this.employeeService.getEmployeeByName(text).subscribe(data =>
      {
        console.log(text)
        console.log(data);  
        //this.getList();
        this.employees = data;
      },err => console.log(err))
    }
  }

  }
