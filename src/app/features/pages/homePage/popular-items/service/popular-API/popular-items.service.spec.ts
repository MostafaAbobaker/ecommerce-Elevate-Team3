import { TestBed } from '@angular/core/testing';

import { PopularItemsService } from './popular-items.service';

describe('PopularItemsService', () => {
  let service: PopularItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
