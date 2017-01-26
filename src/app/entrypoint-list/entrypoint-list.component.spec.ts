/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrypointListComponent } from './entrypoint-list.component';

describe('EntrypointListComponent', () => {
  let component: EntrypointListComponent;
  let fixture: ComponentFixture<EntrypointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntrypointListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrypointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
