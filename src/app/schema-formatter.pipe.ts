import { Pipe, PipeTransform } from '@angular/core';
import { ISchemaObject, IReferenceObject } from './api-definition';
import { Observable } from 'rxjs/Rx';
import { SchemaFormatterService } from './schema-formatter.service';

@Pipe({
  name: 'schemaFormatter'
})
export class SchemaFormatterPipe implements PipeTransform {

  constructor(private formatter: SchemaFormatterService) {

  }

  transform(value: ISchemaObject | IReferenceObject, args?: any): Observable<any> {
    return this.formatter.transform(value, args);
  }

}
