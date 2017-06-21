import { TestBed, inject } from '@angular/core/testing';

import { NewsletterdataService } from './newsletterdata.service';

describe('NewsletterdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterdataService]
    });
  });

  it('should ...', inject([NewsletterdataService], (service: NewsletterdataService) => {
    expect(service).toBeTruthy();
  }));
});
