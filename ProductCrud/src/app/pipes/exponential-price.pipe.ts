import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPrice'
})
export class ExponentialPricePipe implements PipeTransform {

  transform(value: number): number {
    const price = Math.exp(value);
    return price;
  }

}
