import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entrypoint-board',
  templateUrl: './entrypoint-board.component.html',
  styleUrls: ['./entrypoint-board.component.scss']
})
export class EntrypointBoardComponent implements OnInit {

  path: string = '';
  method: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(it => this.method = it['method']);
    this.route.url.concatMap(() =>
      Observable.from(this.route.parent.children)
        .concatMap(it => it.url.take(1))
        .concatMap(it => it)
        .map(it => it.path)
        .toArray()
    ).map(it => '/' + it.join('/'))
      .map(it => decodeURI(it))
      .subscribe(it => this.path = it);
  }

}
