import { Component, OnInit } from '@angular/core';
import { Newsletter } from '../newsletter';
import { NewsletterDataService } from '../newsletter-data.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import { environment } from '../../environment';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-newsletterdetai',
  templateUrl: './newsletterdetail.component.html',
  styleUrls: ['./newsletterdetail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NewsletterdetailComponent implements OnInit {
  newsletter: Newsletter;
  public slug;
  image;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private newsletterData: NewsletterDataService,
    private  router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.newsletter = this.newsletterData.getNewsltterBySlug(this.slug);

    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

}
