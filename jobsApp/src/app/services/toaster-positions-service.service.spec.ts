import { TestBed } from '@angular/core/testing';

import { ToasterPositionsServiceService } from './toaster-positions-service.service';

describe('ToasterPositionsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterPositionsServiceService = TestBed.get(ToasterPositionsServiceService);
    expect(service).toBeTruthy();
  });
});
