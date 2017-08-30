import { Injectable } from '@angular/core';
import { Faq } from './faq';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

@Injectable()
export class FaqdataService {
  lastId: number = 0;
  faqs: Faq[] = [];
  checking:boolean;

  constructor(private http: Http) { }

  getFaq(){
    this.http.get(environment.API_ENDPOINT+'faq')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json){
          let faq = new Faq(item);
          this.addFaq(faq);
        }
      })
  }

  addFaq(faq: Faq ): FaqdataService {
    if( !faq.id ){
      faq.id = ++this.lastId;
    }
    this.faqs.push(faq);
    return this;
  }

  getAllFaq(): Faq[] {
    //this.getFaq();
    if (this.faqs.length == 0 && !this.checking){
      this.getFaq();
      this.checking = true;
    }
    return this.faqs;
  }

  getAllFaqId(id: number): Faq {
    return this.faqs
      .filter(faq => faq.id === id)
      .pop()
  }

}
