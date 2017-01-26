import { Component, OnInit, Input } from '@angular/core';
import { IResponseObject } from '../api-definition';

@Component({
  selector: 'app-response-view',
  templateUrl: './response-view.component.html',
  styleUrls: ['./response-view.component.scss']
})
export class ResponseViewComponent implements OnInit {

  @Input('name') name: string;
  @Input('res') res: {name: string, response: IResponseObject};

  constructor() {
  }

  ngOnInit() {
  }

}
