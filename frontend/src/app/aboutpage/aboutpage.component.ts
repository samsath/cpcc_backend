import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environment';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AboutpageComponent implements OnInit {

  abouts;
  image;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'about')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{

      if(json[0]['image']){
        this.image = json[0]['image']['image'];
      }
      this.abouts = json;
    });
  }

}
