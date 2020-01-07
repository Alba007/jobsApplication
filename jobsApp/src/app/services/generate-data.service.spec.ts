import { TestBed } from '@angular/core/testing';

import { GenerateDataService } from './generate-data.service';

describe('GenerateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateDataService = TestBed.get(GenerateDataService);
    expect(service).toBeTruthy();
  });
});
