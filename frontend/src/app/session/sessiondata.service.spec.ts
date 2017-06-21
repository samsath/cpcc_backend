import { TestBed, inject } from '@angular/core/testing';

import { SessiondataService } from './sessiondata.service';

describe('SessiondataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessiondataService]
    });
  });

  it('should ...', inject([SessiondataService], (service: SessiondataService) => {
    expect(service).toBeTruthy();
  }));
});
