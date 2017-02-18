import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Entrypoint } from '../entrypoint';
import { ApiDefinitionService } from '../api-definition.service';
import { IResponseObject, IHeaderObject } from '../api-definition';

@Component({
  selector: 'app-response-panel',
  templateUrl: './response-panel.component.html',
  styleUrls: ['./response-panel.component.scss']
})
export class ResponsePanelComponent implements OnInit, OnChanges {

  @Input() method: string;
  @Input() path: string;

  entrypoint: Entrypoint;
  responses: [string, IResponseObject][] = [];

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {}

  ngOnChanges() {
    this.apiDefinition.entrypointOf(it => it.method === this.method && it.path === this.path)
      .do(it => this.entrypoint = it)
      .concatMap(it => it.resolveResponses(this.apiDefinition))
      .filter(it => it.length > 0)
      .take(1)
      .subscribe(it => this.responses = it);
  }

  headers(response: IResponseObject): [string, IHeaderObject][] {
    if (response) {
      const keys = Object.keys(response.headers || {});
      return keys.map(key => [key, response.headers[key]] as [string, IHeaderObject])
    } else {
      return [];
    }
  }

}
