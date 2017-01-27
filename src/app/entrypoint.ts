import {
  IOperationObject,
  IParameterObject,
  IReferenceObject,
  IResponseObject
} from './api-definition';
import { Observable } from 'rxjs/Rx';
import { ApiDefinitionService } from './api-definition.service';

export class Entrypoint {

  constructor(public path, public method, private operation: IOperationObject) {
  }

  get tags(): string[] {
    return this.operation.tags;
  }

  get summary(): string {
    return this.operation.summary;
  }

  get description(): string {
    return this.operation.description;
  }

  get externalDocs(): string {
    return 'External docs: ' + this.operation.externalDocs.url;
  }

  get consumes(): string[] {
    return this.operation.consumes;
  }

  get produces(): string[] {
    return this.operation.produces;
  }

  get responses() {
    return this.operation.responses;
  }

  get schemes(): string[] {
    return this.operation.schemes;
  }

  get deprecated(): boolean {
    return this.operation.deprecated;
  }

  get security() {
    return this.operation.security;
  }

  resolveParameters(apiDefinitionService: ApiDefinitionService): Observable<IParameterObject> {
    return Observable.from(this.operation.parameters.map(parameter => {
      if ((parameter as IReferenceObject).$ref) {
        return apiDefinitionService.resolveReference((parameter as IReferenceObject).$ref);
      } else {
        return Observable.of(parameter as IParameterObject);
      }
    }))
      .concatAll()
      .concatMap(parameter => {
        if (parameter.schema && parameter.schema.$ref) {
          return apiDefinitionService.resolveReference(parameter.schema.$ref)
            .map(ref => {
              parameter.schema = ref;
              return parameter;
            });
        } else {
          return Observable.of(parameter);
        }
      });
  }

  resolveResponses(apiDefinitionService: ApiDefinitionService): Observable<[string, IResponseObject]> {
    return Observable.from(Object.keys(this.operation.responses)
      .map(responseName => {
        const responseObject = this.operation.responses[responseName];
        if ((responseObject as IReferenceObject).$ref) {
          return apiDefinitionService.resolveReference((responseObject as IReferenceObject).$ref)
            .map(resObj => [responseName, resObj]);
        } else {
          return Observable.of([responseName, responseObject]);
        }
      }))
      .concatAll()
      .concatMap(([name, obj]) => {
        if (obj.schema && obj.schema.$ref) {
          return apiDefinitionService.resolveReference(obj.schema.$ref)
            .map(ref => {
              obj.schema = ref;
              return [name, obj];
            });
        }
        return Observable.of([name, obj]);
      });
  }
}
