import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Entrypoint } from '../entrypoint';
import { ApiDefinitionService } from '../api-definition.service';
import { IResponseObject } from '../api-definition';

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

  selectedResponseName: string;
  selectedResponse: IResponseObject;

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {}

  ngOnChanges() {
    this.apiDefinition.entrypointOf(it => it.method === this.method && it.path === this.path)
      .do(it => this.entrypoint = it)
      .concatMap(it => it.resolveResponses(this.apiDefinition))
      .filter(it => it.length > 0)
      .do(it => {
        this.selectedResponseName = it[0][0];
        this.selectedResponse = it[0][1];
      })
      .take(1)
      .subscribe(it => this.responses = it);
  }

  switchResponse(response: string) {
    const filtered = this.responses.filter(it => it[0] == response);
    if (filtered.length > 0) {
      this.selectedResponseName = filtered[0][0];
      this.selectedResponse = filtered[0][1]
    }
  }

}
