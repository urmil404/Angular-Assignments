import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface employeeModel {
  name: string;
  id: number;
  contact: string;
  type: string;
  rank: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: employeeModel[] = [];
  officeContact!: string;
  @Output() officeContactEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.employees = [
      {
        name: 'urmil',
        id: 1,
        contact: 'urmil@example.com',
        type: 'Developer',
        rank: 'A',
      },
      {
        name: 'pritam',
        id: 2,
        contact: 'pritam@example.com',
        type: 'Tester',
        rank: 'B',
      },
      {
        name: 'lency',
        id: 3,
        contact: 'lency@example.com',
        type: 'Dev Ops',
        rank: 'C',
      },
      {
        name: 'armika',
        id: 3,
        contact: 'arimka@example.com',
        type: 'Developer',
        rank: 'A',
      },
    ];
  }
  changeContact(i: number) {
    this.officeContact = this.employees[i].contact;
    this.officeContactEvent.emit(this.officeContact);
  }
}
