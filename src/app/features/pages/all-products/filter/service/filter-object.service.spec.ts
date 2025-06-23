import { TestBed } from '@angular/core/testing';

import { FilterObjectService } from './filter-object.service';

describe('FilterObjectService', () => {
  let service: FilterObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
