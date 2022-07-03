import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent {
  employees = [
    {empID:10101, empName:"Henry Anderson", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/henryandersonimage.jpg"},
    {empID:10102, empName:"Tom Cruise", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/tomcruiseimage.jpg"},
    {empID:10103, empName:"Adam Driver", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/adamdriverimage.jpg"},
    {empID:10104, empName:"Reggie Fils-Aime", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/reggiefilsaimeimage.jpg"},
    {empID:10105, empName:"Gabriel Iglesias", empSalary:50000, empDesignation:"Software Engineer", empImg:"../../assets/gabrieliglesiasimage.jpg"}
  ]
}
