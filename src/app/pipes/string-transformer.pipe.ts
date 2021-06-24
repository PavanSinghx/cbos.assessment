import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTransformer',
})
export class StringTransformerPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    if(value === undefined || value == null) {
      return 'X';
    }
    else {
      console.log(value);
      value = value.toString().toUpperCase();
      return value[0];
    }
  }
}
