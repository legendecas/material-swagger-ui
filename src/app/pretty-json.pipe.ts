import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyJson'
})
export class PrettyJsonPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return JSON.stringify(value, null, '  ');
  }

}
