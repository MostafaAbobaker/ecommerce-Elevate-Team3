import { TestBed } from '@angular/core/testing';

import { PasswordIsMatchService } from './passwordIsMatch.service';

describe('PasswordIsMatchService', () => {
  let service: PasswordIsMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordIsMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
