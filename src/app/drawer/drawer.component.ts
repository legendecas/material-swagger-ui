import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  tags: string[]= [];

  constructor(private apiDefinition: ApiDefinitionService) { }

  ngOnInit() {
    this.apiDefinition.resolveTags().toArray().subscribe(
      tags => this.tags = tags.map(tag => tag.name),
      error => console.error(error),
    );
  }

}
