import { TestBed } from '@angular/core/testing';

import { GeturlService } from './geturl.service';

describe('GeturlService', () => {
  let service: GeturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
