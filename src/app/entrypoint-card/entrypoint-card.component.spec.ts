/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrypointCardComponent } from './entrypoint-card.component';

describe('EntrypointCardComponent', () => {
  let component: EntrypointCardComponent;
  let fixture: ComponentFixture<EntrypointCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntrypointCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrypointCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
