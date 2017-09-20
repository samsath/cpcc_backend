import {Component, EventEmitter, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import {routerTransition} from '../router.animations';
import { CalendarService } from './calendar.service';
import { Eventdate } from './eventdate';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import {MaterializeAction} from 'angular2-materialize';

interface CppEvent extends CalendarEvent {
  type: String;
}


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition()],
  styleUrls: ['./events.component.scss'],
  host: {'[@routerTransition]': ''}
})
export class EventsComponent implements OnInit {

  dateelement: (day: CalendarMonthViewDay) => void;
  viewDate: Date = new Date();
  events: Eventdate[];
  view: string = 'month';
  refresh: Subject<any> = new Subject();
  extra: any;
  clickDate: Date;
  modalActions = new EventEmitter<string|MaterializeAction>();
  daydata: Eventdate;
  daytide:Array<any> = [
    {data: [], label: 'Tide'},
  ];
  tideoptionslarge: any = {
    responsive:false,
    maintainAspectRatio: false,
    legend:{display:false},
    tooltips :{
      enable:true,
      mode: 'single',
      callbacks:{
        label: function(tooltipItems, data){
          return tooltipItems.yLabel + ' meters';
        },
        title: function (tooltipItems, data) {
          let date = new Date(null);
          date.setSeconds(tooltipItems[0].xLabel);
          return 'Time: ' + date.toISOString().substr(14, 5);
        }
      }
    },
    scales:{yAxes:[{display:true, labelString:'Level (m)', ticks: {
      callback: function (value, index, values) {
        return value +'m';
      }
    }}],
      xAxes:[{display:true, type: 'linear',position:'bottom', labelString:'Time of day',ticks:{
        callback: function(value, index, values){
          let date = new Date(null);
          date.setSeconds(value);
          let time = date.toISOString().substr(14, 5);
          if (time == '25:00'){
            return '23:59';
          }else{
            return time;
          }
        }
      }}]}
  };
  tideColour:Array<any> = [{
    backgroundColor: 'transparent',
    borderColor: '#2287b0',
    pointBackgroundColor: '#2287b0',
    pointBorderColor: '#2287b0',
    pointHoverBackgroundColor: '#2287b0',
    pointHoverBorderColor: '#2287b0'
  }];
  eventcount = 0;

  addExtraData: (day: CalendarMonthViewDay) => void;

  constructor(public calser: CalendarService,) {
    this.addExtraData = (day: CalendarMonthViewDay): void => {
     day['extra'] = Object.assign(this.calser.getDay(day.date));
    }
  }

  getDate(): void {
    this.calser.getDayRemote(this.clickDate).then((json: Object) =>{
      this.daydata = new Eventdate(json);
      this.daytide = [
        {data: this.daydata.tide, label: 'Tide'},
      ];
      this.eventcount = this.daydata.plaevent_set.length + this.daydata.event_set.length;
    })
  };


  dayData(cell: CalendarMonthViewDay):void {
    this.extra.getDayRemote(cell.date).then((json: Object) =>{
      let item = new Eventdate(json);
      cell['dayData'] = Object.assign(item);
      cell['tideData'] = [
        {data: item.tide, label: 'Tide'},
      ];
      cell['tideEvents'] = Object.assign(item.plaevent_set.length + item.event_set.length);
      });

    const tide:Array<any> = [
      {data: [], label: 'Tide'},
    ];

    const tideoptions: any = {
      responsive:false,
      maintainAspectRatio: true,
      legend:{display:false},
      scales:{yAxes:[{display:false}],xAxes:[{display:false,type: 'linear',position:'bottom'}]}
    };

    const colour:Array<any> = [{
      backgroundColor: 'transparent',
      borderColor: '#2287b0',
      pointBackgroundColor: '#2287b0',
      pointBorderColor: '#2287b0',
      pointHoverBackgroundColor: '#2287b0',
      pointHoverBorderColor: '#2287b0'
    }];
    cell['tideData'] = Object.assign(tide);
    cell['tideOptions'] = Object.assign(tideoptions);
    cell['tideColour'] = Object.assign(colour);
    cell['tideEvents'] = Object.assign(0);
  }


  ngOnInit() {
    this.calser.getCalendar(this.viewDate);
  }


  openModal(date: Date) {
    this.clickDate = date;
    this.getDate();
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
