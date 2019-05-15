import { TestBed } from '@angular/core/testing';

import { JobTabService } from './job-tab.service';

describe('JobTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobTabService = TestBed.get(JobTabService);
    expect(service).toBeTruthy();
  });
});
