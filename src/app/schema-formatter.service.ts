import { Injectable } from '@angular/core';
import { ISchemaObject, IReferenceObject } from './api-definition';
import { Observable } from 'rxjs/Rx';
import { ApiDefinitionService } from './api-definition.service';

@Injectable()
export class SchemaFormatterService {

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  resolveRef(value: ISchemaObject | IReferenceObject): Observable<ISchemaObject> {
    if (value.$ref) {
      return this.apiDefinition.resolveReference(value.$ref)
        .concatMap(schema => this.resolveRef(schema));
    } else {
      const schema = value as ISchemaObject;
      switch (schema.type) {
        case 'object':
          return Observable.create(observable => {
            const keys = Object.keys(schema.properties || {});
            keys.forEach(key => {
              observable.next(this.resolveRef(schema.properties[key])
                .map(property => ({ [key]: property })));
            });
            observable.complete();
          }).concatAll()
            .reduce((acc, cur) => Object.assign({}, acc, {
              properties: Object.assign({}, acc.properties, cur),
            }), schema);
        case 'array':
          return this.resolveRef(schema.items).map(items => Object.assign({}, schema, { items }));
        default:
          return Observable.of(schema);
      }
    }
  }

  transform(value?: ISchemaObject | IReferenceObject, args?: any): Observable<any> {
    if (value) {
      return this.resolveRef(value);
    } else {
      return Observable.of(null);
    }
  }

}
