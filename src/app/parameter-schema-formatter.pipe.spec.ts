/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { ParameterSchemaFormatterPipe } from './parameter-schema-formatter.pipe';
import { ApiDefinitionService } from './api-definition.service';

describe('ParameterSchemaFormatterPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDefinitionService],
    });
  });

  it('should...', inject([ApiDefinitionService], (pipe: ParameterSchemaFormatterPipe) => {
    expect(pipe).toBeTruthy();
  }));
});
