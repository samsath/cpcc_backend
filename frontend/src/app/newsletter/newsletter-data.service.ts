import { Injectable } from '@angular/core';
import { Newsletter } from './newsletter';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

@Injectable()
export class NewsletterDataService {
  checking:boolean;
  newsletters: Newsletter[]=[];


  constructor(private http: Http) { }

  getNewsletter(){
    this.http.get(environment.API_ENDPOINT+'newsletter/')
      .map((res:Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for(let item of json){
          let news = new Newsletter(item);
          this.addNewsletter(news);
        }
      })
  }

  addNewsletter(newsletter:Newsletter): NewsletterDataService {
    this.newsletters.push(newsletter);
    return this;
  }

  getAllNewsletter(): Newsletter[] {
    if(this.newsletters.length == 0 && !this.checking){
      this.getNewsletter();
      this.checking = true;
    }
    return this.newsletters;
  }

  getNewsltterBySlug(slug: string): Newsletter {
    let news = this.newsletters
      .filter(newsletter => newsletter.slug === slug)
      .pop();
    return news
  }

}
