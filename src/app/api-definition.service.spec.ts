/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { ApiDefinitionService } from './api-definition.service';

describe('ApiDefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDefinitionService]
    });
  });

  it('should ...', inject([ApiDefinitionService], (service: ApiDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
