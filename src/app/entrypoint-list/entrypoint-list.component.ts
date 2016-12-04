import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';
import { ITagObject } from '../api-definition';
import { Entrypoint } from '../entrypoint';

@Component({
  selector: 'app-entrypoint-list',
  templateUrl: './entrypoint-list.component.html',
  styleUrls: ['./entrypoint-list.component.scss']
})
export class EntrypointListComponent implements OnInit {
  entrypoints: Entrypoint[] = [];
  tags: ITagObject[] = [];

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit() {
    this.apiDefinition.resolveTags().subscribe(
      tags => this.tags = this.tags.concat(tags),
      error => console.error(error),
    );

    this.apiDefinition.resolveEntrypoints().subscribe(
      entrypoint => this.entrypoints = this.entrypoints.concat(entrypoint),
      error => console.error(error),
    );
  }

  entrypointsOfTag(tag: string) {
    return this.entrypoints.filter(entrypoint => entrypoint.tags.indexOf(tag) >= 0);
  }

}
