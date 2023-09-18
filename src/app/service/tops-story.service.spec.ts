import { TestBed } from '@angular/core/testing';

import { TopsStoryService } from './api-story.service';

describe('TopsStoryService', () => {
  let service: TopsStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopsStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
