import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {routerTransition} from '../router.animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomepageComponent implements OnInit {
  title = 'Chiswick Pier Canoe Club';
  homepage;
  notification;
  images;
  defaultImage = 'https://www.placecage.com/1000/1000';
  offset = 1000;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'homepage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
        if(json[0]['main_image']){
          this.images = json[0]['main_image']['image'];
        }
        this.homepage = json;

      });

    this.http.get(environment.API_ENDPOINT + 'notification')
      .map((res: Response) => res.json()).subscribe( (json: Object) => {
        this.notification = json;
    })


  }

}
