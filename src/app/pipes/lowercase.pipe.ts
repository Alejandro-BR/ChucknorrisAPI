import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseAll'
})
export class LowercaseAllPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.toLowerCase();
  }
}
