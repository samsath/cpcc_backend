import { TestBed, inject } from '@angular/core/testing';
import {Newsletter} from './newsletter';
import { NewsletterDataService } from './newsletter-data.service';

describe('NewsletterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterDataService]
    });
  });

  it('should ...', inject([NewsletterDataService], (service: NewsletterDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllNewsletters()', () => {
    it('should return an empty array', inject([NewsletterDataService],(service: NewsletterDataService) =>{
      expect(service.getAllNewsletter()).toEqual([]);
    }));
    it('should return all articles', inject([NewsletterDataService], (service: NewsletterDataService) => {
      const newsletter1 = new Newsletter({
        id:1,
        number:"No. 97",
        title:"To putney and back",
        date:"12/2/2018",
        sort_value:1,
        content:"<html><body>hi</body></html>"
      });
      const newsletter2 = new Newsletter({
        id:2,
        number:"No. 97",
        title:"To putney and back",
        date:"12/2/2018",
        sort_value:1,
        content:"<html><body>hi</body></html>"
      });
      service.addNewsletter(newsletter1);
      service.addNewsletter(newsletter2);
      expect(service.getAllNewsletter()).toEqual([newsletter1, newsletter2]);
    }));
  })

});
