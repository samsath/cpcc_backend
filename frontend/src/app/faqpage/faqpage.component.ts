import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Faq } from './faq';
import { FaqdataService } from './faqdata.service';
import {environment} from '../environment';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-faqpage',
  templateUrl: './faqpage.component.html',
  styleUrls: ['./faqpage.component.scss'],
  providers: [FaqdataService],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class FaqpageComponent implements OnInit {
  image;

  constructor(private faqdataService: FaqdataService,private http: Http) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  get faqs(){
    return this.faqdataService.getAllFaq();
  }

}
