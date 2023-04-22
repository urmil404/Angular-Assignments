import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  pure: false
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type: 'stringify' | 'parse'): any {
    if(type === 'stringify') {
      return JSON.stringify(value)
    } else if (type === 'parse') {
      return JSON.parse(value)
    } else {
      return value;
    }
  }

}
