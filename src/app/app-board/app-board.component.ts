import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';
import { IInfoObject } from '../api-definition';

@Component({
  selector: 'app-board',
  templateUrl: './app-board.component.html',
  styleUrls: ['./app-board.component.scss']
})
export class AppBoardComponent implements OnInit {

  info: IInfoObject;

  constructor(private apiDefinition: ApiDefinitionService) { }

  ngOnInit() {
    this.apiDefinition.definitionSubject.subscribe(definition => this.info = definition.info);
  }

}
