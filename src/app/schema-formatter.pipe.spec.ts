/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { SchemaFormatterPipe } from './schema-formatter.pipe';
import { ApiDefinitionService } from './api-definition.service';

describe('SchemaFormatterPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDefinitionService],
    });
  });

  it('should...', inject([ApiDefinitionService], (pipe: SchemaFormatterPipe) => {
    expect(pipe).toBeTruthy();
  }));
});
