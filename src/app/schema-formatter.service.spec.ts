/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchemaFormatterService } from './schema-formatter.service';

describe('SchemaFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemaFormatterService]
    });
  });

  it('should ...', inject([SchemaFormatterService], (service: SchemaFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
