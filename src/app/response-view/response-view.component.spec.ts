/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResponseViewComponent } from './response-view.component';

describe('ResponseViewComponent', () => {
  let component: ResponseViewComponent;
  let fixture: ComponentFixture<ResponseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
