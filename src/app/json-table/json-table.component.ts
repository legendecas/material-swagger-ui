import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISchemaObject } from '../api-definition';
import { ApiDefinitionService } from '../api-definition.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit, OnChanges {

  @Input() name: string = '';
  @Input() schema: ISchemaObject;
  @Input() typeAlias: string = '';
  @Input() isRoot: boolean = true;

  item: ISchemaObject;
  itemTypeAlias: string = '';

  properties: [string, ISchemaObject, string][] = [];

  contentHidden = false;

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
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
  }

  get isArray(): boolean {
    return this.schema.type === 'array';
  }

  get isObject(): boolean {
    return this.schema.type === 'object';
  }

  toggleContent() {
    this.contentHidden = !this.contentHidden;
  }

}
