import { TestBed, inject } from '@angular/core/testing';

import { TidelevelDataService } from './tidelevel-data.service';

describe('TidelevelDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TidelevelDataService]
    });
  });

  it('should ...', inject([TidelevelDataService], (service: TidelevelDataService) => {
    expect(service).toBeTruthy();
  }));
});
