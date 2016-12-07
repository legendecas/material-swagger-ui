import { Pipe, PipeTransform } from '@angular/core';
import { IParameterObject } from './api-definition';
import { ApiDefinitionService } from './api-definition.service';
import { Observable } from 'rxjs/Rx';
import { SchemaFormatterService } from './schema-formatter.service';

@Pipe({
  name: 'parameterSchemaFormatter'
})
export class ParameterSchemaFormatterPipe implements PipeTransform {

  constructor(private apiDefinition: ApiDefinitionService,
              private schemaFormatter: SchemaFormatterService) {

  }

  transform(value?: IParameterObject, args?: any): Observable<any> {
    if (value) {
      let observable: Observable<IParameterObject>;
      if (value.$ref) {
        observable = this.apiDefinition.resolveReference(value.$ref);
      } else {
        observable = Observable.of(value);
      }
      return observable.concatMap(parameter => {
        /* tslint:disable:no-switch-case-fall-through */
        switch (parameter.in) {
          case 'body':
            return this.schemaFormatter.transform(parameter.schema);
          case 'query':
            switch (parameter.type) {
              case 'array':
                return this.schemaFormatter.transform(parameter.items).map(items => [items]);
              default:
                return Observable.of(parameter.type);
            }
          default:
            return Observable.of(parameter.type);
        }
        /* tslint:enable:no-switch-case-fall-through */
      });
    } else {
      return Observable.of(null);
    }
  }

}
