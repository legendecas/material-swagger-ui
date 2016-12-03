import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from './api-definition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Material Swagger UI';
  host: string;
  basePath: string;

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit(): void {
    this.apiDefinition.definitionSubject.subscribe(
      definition => {
        this.title = definition.info.title;
        this.host = definition.host;
        this.basePath = definition.basePath;
      },
      error => console.error(error),
    );
  }

}
