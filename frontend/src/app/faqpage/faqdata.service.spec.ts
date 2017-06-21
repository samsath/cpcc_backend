import { TestBed, inject } from '@angular/core/testing';
import { Faq } from './faq';
import { FaqdataService } from './faqdata.service';
import {describe} from 'selenium-webdriver/testing';

describe('FaqdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaqdataService]
    });
  });

  it('should ...', inject([FaqdataService], (service: FaqdataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllFaq()', () => {
    it('should return nothing', inject([FaqdataService], (service: FaqdataService) => {
      expect(service.getAllFaq()).toEqual([])
    }));

    it('should return all', inject([FaqdataService], (service: FaqdataService) =>{
      const faq1 = new Faq({id:1, question:"question1", answer:"answer1", sort_value:1});
      const faq2 = new Faq({id:2, question:"question2", answer:"answer2", sort_value:2});
      service.addFaq(faq1);
      service.addFaq(faq2);
      expect(service.getAllFaq()).toEqual([faq1, faq2]);
    }));
  });

  describe('#getAllFaqId()', () => {
    it('should return nothing', inject([FaqdataService], (service: FaqdataService) => {
      const faq1 = new Faq({id:1, question:"question1", answer:"answer1", sort_value:1});
      const faq2 = new Faq({id:2, question:"question2", answer:"answer2", sort_value:2});
      service.addFaq(faq1);
      service.addFaq(faq2);
      expect(service.getAllFaqId(1)).toEqual(faq1);
      expect(service.getAllFaqId(2)).toEqual(faq2);
    }));

  });

});
