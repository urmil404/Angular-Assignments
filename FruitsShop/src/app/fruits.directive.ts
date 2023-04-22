import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fruitBenefits]',
})
export class FruitsDirective {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.display = 'block';
    const fruitType = this.elementRef.nativeElement.innerText;
    console.log(fruitType);
    if (fruitType === 'Dry') {
      this.elementRef.nativeElement.style.backgroundColor = '#FF9347';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '#00AC61';
    }
  }
}
