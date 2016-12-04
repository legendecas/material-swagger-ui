import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';
import { IInfoObject } from '../api-definition';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  info: IInfoObject;

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {
    this.apiDefinition.definitionSubject.subscribe(
      definition => this.info = definition.info,
      error => console.error(error),
    );
  }

}
