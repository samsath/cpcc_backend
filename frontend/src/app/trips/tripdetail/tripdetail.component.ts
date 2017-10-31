import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripdataService } from '../tripdata.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'angular2-lightbox';
import * as L from 'leaflet';
import {routerTransition} from '../../router.animations';
import {latLng} from "leaflet";

@Component({
  selector: 'app-tripdetail',
  templateUrl: './tripdetail.component.html',
  styleUrls: ['./tripdetail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TripdetailComponent implements OnInit {
  trip: Trip;
  public slug;
  private _album = [];
  tideData: any[] = [{ data: [] }];
  center = latLng(51.482293, -0.251203);
  layer = [
            L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }),
          ];
  options = {
          zoom: 14,
          zoomControl:true,
  };

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
    private tripdataService: TripdataService,
    private router: Router,
    private _lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug'];
        this.tripdataService.getRemoteTripBySlug(this.slug).then((json: Object) => {
          this.trip = new Trip(json);

          for(let gallery of this.trip.gallery){
            this._album.push(gallery.image);
          }
          this.tideData = [{data: this.trip.day.tide, label: 'Tide'},];
          let coord = this.trip.map.map.centre.coordinates;
          let path = [];
          for(let pt of this.trip.map.map.path.coordinates){
            let newpt = [pt[1], pt[0]];
            path.push(newpt);
          }
          this.center = L.latLng({lat: coord[1], lng: coord[0]});
          this.layer = [
              L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }),
              L.polyline(path,{color:'red'}),
            ];
          this.options = {
            zoom: 14,
            zoomControl:true,
          }
          });
      });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

}
