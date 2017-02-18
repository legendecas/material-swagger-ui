import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISchemaObject, IParameterObject } from '../api-definition';
import { ApiDefinitionService } from '../api-definition.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit, OnChanges {

  @Input() type: 'schema' | 'parameters' = 'schema';

  @Input() parameters: IParameterObject[] = [];

  @Input() name: string = '';
  @Input() schema: ISchemaObject;
  @Input() typeAlias: string = '';
  @Input() isRoot: boolean = true;

  item: ISchemaObject;
  itemTypeAlias: string = '';

  properties: [string, ISchemaObject, string][] = [];

  hideChildren = false;

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    switch (this.type) {
      case 'schema':
        switch (this.schema.type) {
          case 'array':
            if (this.schema.items.$ref) {
              this.itemTypeAlias = this.schema.items.$ref;
              this.apiDefinition.resolveReference(this.schema.items.$ref)
                .subscribe(it => this.item = it);
            } else {
              this.item = this.schema.items;
            }
            break;
          case 'object':
            const keys = Object.keys(this.schema.properties || {});
            Observable.from(keys)
              .map(key => [key, this.schema.properties[key]])
              .concatMap(([key, property]) => {
                if (typeof property !== 'string' && property.$ref) {
                  return this.apiDefinition.resolveReference(property.$ref).take(1)
                    .map(it => [key, it, property.$ref]);
                } else {
                  return Observable.of([key, property, '']);
                }
              })
              .map(it => it as [string, ISchemaObject, string])
              .toArray()
              .subscribe(properties => this.properties = properties);
            break;
          default:
            break;
        }
        break;
      case 'parameters':
        break;
    }
  }

  get isArray(): boolean {
    return this.schema.type === 'array';
  }

  get isObject(): boolean {
    return this.schema.type === 'object';
  }

  toggleHideChildren() {
    this.hideChildren = !this.hideChildren;
  }

}
