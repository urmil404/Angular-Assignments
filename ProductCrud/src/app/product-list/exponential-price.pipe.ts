import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPrice'
})
export class ExponentialPricePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
