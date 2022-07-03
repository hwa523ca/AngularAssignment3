import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-grid',
  templateUrl: './employees-grid.component.html',
  styleUrls: ['./employees-grid.component.css']
})
export class EmployeesGridComponent {
    imagePath:string="../../assets/henryandersonimage.jpg";  
    employees = [
        {empID:10101, empName:"Henry Anderson", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/henryandersonimage.jpg"},
        {empID:10102, empName:"Tom Cruise", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/tomcruiseimage.jpg"},
        {empID:10103, empName:"Adam Driver", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/adamdriverimage.jpg"},
        {empID:10104, empName:"Reggie Fils-Aime", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/reggiefilsaimeimage.jpg"},
        {empID:10105, empName:"Gabriel Iglesias", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/gabrieliglesiasimage.jpg"}
      ]
}
