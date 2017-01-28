import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  title: string = 'Swagger UI';
  host: string = 'http://www.example.com';

  constructor(private apiDefinition: ApiDefinitionService) { }

  ngOnInit() {
    this.apiDefinition.definitionSubject.subscribe(definition => {
      this.title = definition.info.title;
      this.host = definition.host;
    });
  }

}
