import { Component, OnInit, Input } from '@angular/core';
import { ApiDefinitionService } from '../api-definition.service';
import { Entrypoint } from '../entrypoint';

@Component({
  selector: 'app-request-panel',
  templateUrl: './request-panel.component.html',
  styleUrls: ['./request-panel.component.scss']
})
export class RequestPanelComponent implements OnInit {

  @Input() method: string;
  @Input() path: string;

  entrypoint: Entrypoint;

  constructor(private apiDefinition: ApiDefinitionService) { }

  ngOnInit() {
    this.apiDefinition.entrypointOf(it => it.method === this.method && it.path === this.path)
      .subscribe(it => this.entrypoint = it);
  }

}
