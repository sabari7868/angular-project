import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

addSuccessMessage: boolean = false;
employee: Employee = new Employee()

constructor(private employeeService: EmployeeService, private router: Router) {}

saveEmploye()
{
  this.employeeService.addEmployee(this.employee).subscribe(data => {        
    console.log(data);
    this.goToEmployeeList()
  },
  err => {
    console.log(err);
  });
}


goToEmployeeList()
{
   this.router.navigate(['/employees'])
}
onSubmit() {
  // console.log(this.employee);
  this.saveEmploye();
  this.addSuccessMessage = true;
}


}
