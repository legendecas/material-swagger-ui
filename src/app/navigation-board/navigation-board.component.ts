import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';
import { Entrypoint } from '../entrypoint';
import { ITagObject } from '../api-definition';

@Component({
  selector: 'app-navigation-board',
  templateUrl: 'navigation-board.component.html',
  styleUrls: ['navigation-board.component.scss']
})
export class NavigationBoardComponent implements OnInit {

  basePath: string = '/';
  docVersion: string;

  entrypoints: Entrypoint[] = [];
  tags: ITagObject[] = [];

  constructor(private apiDefinition: ApiDefinitionService) { }

  ngOnInit() {
    this.apiDefinition.definitionSubject.subscribe(definition => {
      this.basePath = definition.basePath;
      this.docVersion = definition.info.version;
    });
    this.apiDefinition.resolveEntrypoints()
      .subscribe(entrypoints => this.entrypoints = entrypoints);
    this.apiDefinition.resolveTags().subscribe(tags => this.tags = tags);
  }

  entrypointsOfTag(tagName: string): Entrypoint[] {
    return this.entrypoints.filter(entrypoint => entrypoint.tags.indexOf(tagName) >= 0);
  }

}
