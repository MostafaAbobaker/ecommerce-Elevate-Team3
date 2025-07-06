import { TestBed } from '@angular/core/testing';

import { FilterOjectService } from './filter-oject.service';

describe('FilterOjectService', () => {
  let service: FilterOjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterOjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
