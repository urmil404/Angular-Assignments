import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
})
export class OfficeComponent {
  @Input() officeContact!: string;
}
