import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import * as Url from 'url';
import { uniq, uniqBy } from 'lodash';
import { IApiDefinition, ITagObject } from './api-definition';
import { Entrypoint } from './entrypoint';
import { SchemaValidationService } from './schema-validation.service';

@Injectable()
export class ApiDefinitionService {
  private _url: string;
  private subject = new BehaviorSubject<IApiDefinition>(null);
  definitionSubject = this.subject.filter(definition => !!definition);

  constructor(private http: Http, private validator: SchemaValidationService) {
    this.url = 'http://petstore.swagger.io/v2/swagger.json';
  }

  get url(): string {
    return this._url;
  }

  set url(val: string) {
    this._url = val;
    this.http.get(this.url)
      .map(response => response.json())
      .concatMap(definition => this.validator.validate(definition))
      .subscribe(
        definition => this.subject.next(definition),
        error => this.subject.error(error),
      );
  }

  resolveEntrypoints(): Observable<Entrypoint[]> {
    return this.definitionSubject
      .map(swagger => swagger.paths)
      .concatMap(paths => {
        return Observable.from(Object.keys(paths)
          .map(path => [paths[path], path])
          .map(([methods, path]) =>
            Object.keys(methods).map(method => new Entrypoint(path, method, methods[method])))
          .reduce((arr, e) => arr.concat(e), []))
          .toArray();
      });
  }

  entrypointOf(filter: (it: Entrypoint) => boolean): Observable<Entrypoint> {
    return this.resolveEntrypoints()
      .map(entrypoints => entrypoints.filter(filter))
      .filter(it => it.length > 0)
      .map(it => it[0]);
  }

  resolveReference($ref: string): Observable<any> {
    const uri = Url.parse($ref);
    const paths = uri.hash.slice(1).split('/').filter(key => !!key);
    return this.definitionSubject
      .pluck(...paths);
  }

  resolveTags(): Observable<ITagObject[]> {
    const tagsResolver = this.resolveEntrypoints()
      .map(entrypoints => [].concat(...entrypoints.map(it => it.tags)))
      .map(array => array.reduce((arr, thing) => arr.concat(thing), []))
      .map(tags => uniq(tags))
      .map(tags => tags.map(tag => ({ name: tag })));
    return this.definitionSubject
      .map(swagger => swagger.tags)
      .concatMap(tags => tagsResolver.map(partialTagObjects => tags.concat(tags)))
      .map(t => uniqBy(t, 'name'));
  }

}
