import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!: FormGroup

  constructor( private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName:[""],
      lastName:[""],
      email:[""],
      mobileNumber:[""],
      salary:[""],

    })
  }

}
