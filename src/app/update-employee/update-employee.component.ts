import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  
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

goToEmployeeList()
{
   this.router.navigate(['/employees'])
}

  onSubmit()
  {
      this.employeSerive.updateEmployee(this.id, this.employee).subscribe(data =>
        {
          console.log(data);
          this.goToEmployeeList();
          
        },err => console.log(err))
  }

}
