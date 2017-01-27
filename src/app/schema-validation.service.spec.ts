/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { SchemaValidationService } from './schema-validation.service';

describe('SchemaValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchemaValidationService]
    });
  });

  it('should ...', inject([SchemaValidationService], (service: SchemaValidationService) => {
    expect(service).toBeTruthy();
  }));
});
