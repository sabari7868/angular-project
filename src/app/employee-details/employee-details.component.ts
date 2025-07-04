import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id!: number;
  employee: Employee = new Employee() ;
  constructor(private employeSerive: EmployeeService, private route: ActivatedRoute,private router: Router)
  {

  }
  
  ngOnInit()
  {
    this.id= this.route.snapshot.params['id']
    this.employeSerive.getEmployee(this.id).subscribe(data => {
      console.log(data)
       this.employee=data
    },err =>console.log(err))
  }


}
