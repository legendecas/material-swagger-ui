import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';
import { Entrypoint } from '../entrypoint';
import { IParameterObject } from '../api-definition';

@Component({
  selector: 'app-request-panel',
  templateUrl: './request-panel.component.html',
  styleUrls: ['./request-panel.component.scss']
})
export class RequestPanelComponent implements OnInit, OnChanges {

  @Input() method: string;
  @Input() path: string;

  entrypoint: Entrypoint;
  parameters: IParameterObject[] = [];

  constructor(private apiDefinition: ApiDefinitionService) { }

  ngOnInit() {}

  ngOnChanges() {
    this.apiDefinition.entrypointOf(it => it.method === this.method && it.path === this.path)
      .do(it => this.entrypoint = it)
      .concatMap(it => it.resolveParameters(this.apiDefinition))
      .subscribe(it => this.parameters = it);
  }

  get headers(): IParameterObject[] {
    return this.parameters.filter(it => it.in === 'header');
  }

  get urlParams(): IParameterObject[] {
    return this.parameters.filter(it => it.in === 'query' || it.in === 'path')
  }

  get formData(): IParameterObject[] {
    return this.parameters.filter(it => it.in === 'formData')
  }

  get body(): IParameterObject[] {
    return this.parameters.filter(it => it.in === 'body');
  }

}
