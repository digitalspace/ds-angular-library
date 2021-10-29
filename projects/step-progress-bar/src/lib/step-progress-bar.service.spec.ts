import { TestBed } from '@angular/core/testing';

import { StepProgressBarService } from './step-progress-bar.service';

describe('StepProgressBarService', () => {
  let service: StepProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
