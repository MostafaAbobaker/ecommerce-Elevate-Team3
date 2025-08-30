import { TestBed } from '@angular/core/testing';

import { StoreEmailService } from './store-email.service';

describe('StoreEmailService', () => {
  let service: StoreEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
