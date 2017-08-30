import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SessiondataService } from './sessiondata.service';
import { environment } from '../../environments/environment';
import {routerTransition} from '../router.animations';


@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SessionComponent implements OnInit {

  column:number;
  image;


  constructor(private http: Http,
              private sessionsdata: SessiondataService) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  get sections(){
    let session = this.sessionsdata.getAllSession();
    this.column = session.length;
    return session;
  }

}
