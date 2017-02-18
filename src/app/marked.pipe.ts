import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {

  transform(value?: string, args?: any): string {
    if (value) {
      return marked(value);
    } else {
      return '';
    }
  }

}
