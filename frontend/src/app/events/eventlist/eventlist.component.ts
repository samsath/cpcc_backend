import {Component, EventEmitter, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {routerTransition} from '../../router.animations';
import { CalendarService } from '../calendar.service';
import { Eventdate, Windy  } from '../eventdate';
import 'rxjs/Rx';
import {environment} from "../../../environments/environment";
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EventlistComponent implements OnInit {

  viewDate: Date = new Date();
  days : Array<Eventdate>;
  image;

  constructor(private http: Http, public calser: CalendarService) { }

  ngOnInit() {
    let year = '' + this.viewDate.getFullYear();
    let month = '' + (this.viewDate.getMonth() + 1);
    this.calser.getMonthData(year, month).then((json: Array<Eventdate>) =>{
      this.days = json;
    });

    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  reload(){
    let year = '' + this.viewDate.getFullYear();
    let month = '' + (this.viewDate.getMonth() + 1);
    this.calser.getMonthData(year, month).then((json: Array<Eventdate>) =>{
      this.days = json;
    });
  }

  previous() {
    this.viewDate.setMonth(this.viewDate.getMonth() - 1);
    this.reload();
  }

  next() {
    this.viewDate.setMonth(this.viewDate.getMonth() + 1);
    this.reload();
  }
}
