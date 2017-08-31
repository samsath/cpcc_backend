import { Injectable } from '@angular/core';
import { Eventdate } from './eventdate';
import { environment } from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class CalendarService {

  calendar: {[s:string]: Eventdate }= <any>{};
  date: string;
  checking:boolean;
  month: number;
  year: number;
  datecheck:Array<string> = [];

  constructor(private http: Http) { }

  getMonth():void {
    this.http.get(environment.API_ENDPOINT+'calender/' + this.year +'/' + this.month)
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json) {
          let day = new Eventdate(item);
          day.start = new Date(day.date);
          this.calendar[day.date] = day;
        }
      });
  }


  getRemoteDay(year:string, month:string, day:string){
    let str_date = year + '-' + month + '-' + day;
    if (this.datecheck.indexOf(str_date) === -1) {
      this.http.get(environment.API_ENDPOINT + 'calender/' + year + '/' + month + '/' + day)
        .map((res: Response) => res.json())
        .subscribe((json: Array<Object>) => {
          this.calendar[str_date] = new Eventdate(json);
          let index = this.datecheck.indexOf(str_date,0);
          if(index > -1){
            this.datecheck.splice(index,1);
          }
        });
    }
  }

  getDayRemote(date: Date): Promise<Eventdate>{
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let str_year = year.toString();
    let str_month = month.toString();
    let str_day = day.toString();
    if(str_month.length < 2){
      str_month = '0'+str_month;
    }
    if (str_day.length < 2){
      str_day = '0' + str_day;
    }
    let str_date = str_year + '-' + str_month + '-' + str_day;
    return this.http.get(environment.API_ENDPOINT + 'calender/' + year + '/' + month + '/' + day)
      .map((res: Response) => res.json()).toPromise();
  }


  getDay(date: Date): Promise<Eventdate> {

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let str_year = year.toString();
    let str_month = month.toString();
    let str_day = day.toString();
    if(str_month.length < 2){
      str_month = '0'+str_month;
    }
    if (str_day.length < 2){
      str_day = '0' + str_day;
    }
    let str_date = str_year + '-' + str_month + '-' + str_day;
    if(this.calendar[str_date] === undefined || null){
      if(this.datecheck.indexOf(str_date) === -1){
        this.getRemoteDay(str_year, str_month, str_day);
        this.datecheck.push(str_date);
      }
    }
    setTimeout(() => {

    }, 1000);
    return Promise.resolve(this.calendar[str_date]);
  };

  getCalendar(date:Date): Promise<{[s:string]: Eventdate }> {
    let year = date.getFullYear();
    let month = date.getMonth();
    if(this.year != year || this.month != month){
      this.year = year;
      this.month = month;
      this.checking = false;
    }
    if(!this.checking){
      this.getMonth();
      this.checking = true;
    }
    return Promise.resolve(this.calendar);
  }


}
