import { Injectable } from '@angular/core';
import { IApiDefinition } from './api-definition';
import { Observable } from 'rxjs';

@Injectable()
export class SchemaValidationService {

  constructor() {
  }

  validate(schema: IApiDefinition): Observable<IApiDefinition> {
    return Observable.of(schema);
  }

}
