import { TestBed } from '@angular/core/testing';

import { TakServiceService } from './tak-service.service';

describe('TakServiceService', () => {
  let service: TakServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
