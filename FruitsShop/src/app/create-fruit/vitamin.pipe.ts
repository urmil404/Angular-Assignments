import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vitamin',
  pure: true,
})
export class VitaminPipe implements PipeTransform {
  transform(value: number, percentage: string = '%'): string {
    return `${value} ${percentage}`;
  }
}
