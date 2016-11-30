import { Injectable } from '@angular/core';
import { ApiDefinition } from './api-definition';
import { Observable } from 'rxjs';

@Injectable()
export class SchemaValidationService {

  constructor() {
  }

  validate(schema: ApiDefinition): Observable<ApiDefinition> {
    return Observable.of(schema);
  }

}
