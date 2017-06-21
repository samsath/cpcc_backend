import { TestBed, inject } from '@angular/core/testing';
import {Trip} from './trip';
import { TripdataService } from './tripdata.service';
import {describe} from 'selenium-webdriver/testing';


describe('TripdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripdataService]
    });
  });

  it('should ...', inject([TripdataService], (service: TripdataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTrip()', () =>{
    it('should return an empty array by default', inject([TripdataService], (service: TripdataService) =>{
      expect(service.getAllTrips()).toEqual([]);
    }));
    it('should return all trips', inject([TripdataService], (service: TripdataService) =>{
      const trp1 = new Trip({id:0,title:'trip',});
      const trp2 = new Trip({id:1,title:'trip2',});
      service.addTrip(trp1);
      service.addTrip(trp2);
      expect(service.getAllTrips()).toEqual([trp1, trp2]);
    }));
  })
});
