import { Component, OnInit, Input } from '@angular/core';
import { Entrypoint } from '../entrypoint';
import { ParameterObject, ResponseObject } from '../api-definition';
import { ApiDefinitionService } from '../api-definition.service';

@Component({
  selector: 'app-entrypoint-card',
  templateUrl: './entrypoint-card.component.html',
  styleUrls: ['./entrypoint-card.component.scss']
})
export class EntrypointCardComponent implements OnInit {

  @Input() entrypoint: Entrypoint;

  parameters: ParameterObject[] = [];
  responses: {name: string, response: ResponseObject}[] = [];
  errors: any[] = [];

  showDetails = false;

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
    this.showDetails = !this.showDetails;
  }

}
