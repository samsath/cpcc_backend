import { TestBed, inject } from '@angular/core/testing';

import { NextSessionService } from './next-session.service';

describe('NextSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextSessionService]
    });
  });

  it('should ...', inject([NextSessionService], (service: NextSessionService) => {
    expect(service).toBeTruthy();
  }));
});
