import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Entrypoint } from '../entrypoint';
import { IParameterObject, IResponseObject } from '../api-definition';
import { ApiDefinitionService } from '../api-definition.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-entrypoint-card',
  templateUrl: './entrypoint-card.component.html',
  styleUrls: ['./entrypoint-card.component.scss']
})
export class EntrypointCardComponent implements OnInit {

  @Input() entrypoint: Entrypoint;

  parameters: IParameterObject[] = [];
  responses: {name: string, response: IResponseObject}[] = [];
  errors: any[] = [];

  @ViewChild('details') detailsView: ElementRef;

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {
    this.entrypoint.resolveParameters(this.apiDefinition).subscribe(
      parameter => {
        this.parameters = this.parameters.concat(parameter);
      },
      error => this.errors = this.errors.concat(error),
    );

    this.entrypoint.resolveResponses(this.apiDefinition).subscribe(
      ([name, response]) => this.responses = this.responses.concat({ name, response }),
      error => this.errors = this.errors.concat(error)
    );
  }

  toggleDetails() {
    ($(this.detailsView.nativeElement) as any).collapse('toggle');
  }

  get securities() {
    if (this.entrypoint.security) {
      return _.flatMap(this.entrypoint.security, sec => _.values(sec));
    } else {
      return [];
    }
  }

}
