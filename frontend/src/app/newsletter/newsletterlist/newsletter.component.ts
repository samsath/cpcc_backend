import { Component, OnInit } from '@angular/core';
import { Newsletter } from '../newsletter';
import { NewsletterDataService } from '../newsletter-data.service';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NewsletterComponent implements OnInit {

  image;

  constructor(private http: Http,
              private newsletterDataService: NewsletterDataService) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  get newsletters(){
    return this.newsletterDataService.getAllNewsletter();
  }

}
