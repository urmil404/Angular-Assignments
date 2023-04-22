import { Directive, ElementRef, Input } from '@angular/core';
import { employeeModel } from './employee-list.component';

@Directive({
  selector: '[appRanking]',
})
export class RankingDirective {
  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef.nativeElement);
  }

  ngAfterViewInit(): void {
    const value = this.elementRef.nativeElement.innerText;
    if (value === 'A') {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    } else if (value === 'B') {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
