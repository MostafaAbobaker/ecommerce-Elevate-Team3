import { TestBed } from '@angular/core/testing';

import { TestPopularIremService } from './test-popular-irem.service';

describe('TestPopularIremService', () => {
  let service: TestPopularIremService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPopularIremService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
