import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { Observable } from 'rxjs';
// import { DepartmentService } from '../../shared/department.service';
// import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  categories$;



  constructor(private service: EmployeeService,


 //   private departmentService: DepartmentService,
  //  private notificationService: NotificationService
    ) {

this.categories$ = service.getCetegories();


    }



  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
  //    this.notificationService.success(':: Submitted successfully');
    }
  }

}
