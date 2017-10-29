import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Eventdate, Windy  } from '../eventdate';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {routerTransition} from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-evetndetail',
  templateUrl: './evetndetail.component.html',
  styleUrls: ['./evetndetail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EvetndetailComponent implements OnInit {

  day : Eventdate;
  viewDate: Date;
  image;
  tideData: any[] = [{ data: [] }];
  public slug;
  tideoptionslarge: any = {
    responsive:true,
    maintainAspectRatio: true,
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


  constructor(
     private route: ActivatedRoute,
     private router: Router,
     public calser: CalendarService,
     private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params =>{
        this.slug = params['date'];
        this.viewDate = new Date(this.slug);
        this.calser.getDayRemote(this.viewDate).then((json:Object) => {
          this.day = new Eventdate(json);
          let tide = this.day.tide;
          this.tideData = [{data: tide, label: 'Tide'},];
          console.log(this.tideData);
        });

      })
  }

  getdirection(number: Windy): any{
    return this.sanitizer.bypassSecurityTrustStyle('transform:rotate(' + number.direction +'deg)');
  }

}
