import { TestBed } from '@angular/core/testing';

import { CharactersDataService } from './characters-data.service';

describe('CharactersDataService', () => {
  let service: CharactersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
