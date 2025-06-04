import { TestBed } from '@angular/core/testing';

import { ValueOfTapService } from './value-of-tap.service';

describe('ValueOfTapService', () => {
  let service: ValueOfTapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueOfTapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
