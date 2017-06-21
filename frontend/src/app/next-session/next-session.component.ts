import { Component, OnInit } from '@angular/core';
import { NextSessionService } from './next-session.service';
import {NextSession} from './next-session';

@Component({
  selector: 'app-next-session',
  templateUrl: './next-session.component.html',
  styleUrls: ['./next-session.component.scss'],
})
export class NextSessionComponent implements OnInit {

  session;
  tideOptions: any = {
    legend:{display:false},
    scales:{yAxes:[{display:false}],xAxes:[{display:false,type: 'linear',position:'bottom'}]}
  };
  tideColour:Array<any> = [{
    backgroundColor: '#fff',
    borderColor: '#2287b0',
    pointBackgroundColor: '#2287b0',
    pointBorderColor: '#2287b0',
    pointHoverBackgroundColor: '#2287b0',
    pointHoverBorderColor: '#2287b0'
  }];

  constructor(
    private nextsessionService: NextSessionService
  ) { }

  ngOnInit() {
    this.nextsessionService.getSession().subscribe((json: Object) =>{
      this.session = new NextSession().fromJSON(json);
    });
  }


}
