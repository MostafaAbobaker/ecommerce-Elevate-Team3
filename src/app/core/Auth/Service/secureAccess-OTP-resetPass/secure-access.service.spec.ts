import { TestBed } from '@angular/core/testing';

import { SecureAccessService } from './secure-access.service';

describe('SecureAccessService', () => {
  let service: SecureAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
