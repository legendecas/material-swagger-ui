import { Component, OnInit } from '@angular/core';
import { ApiDefinitionService } from './api-definition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private apiDefinition: ApiDefinitionService) {
  }

  ngOnInit(): void {
    this.apiDefinition.definitionSubject.subscribe(
      definition => this.title = definition.info.title,
      error => console.error(error),
    );
  }

}
