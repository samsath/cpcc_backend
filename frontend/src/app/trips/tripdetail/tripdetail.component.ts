import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripdataService } from '../tripdata.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'angular2-lightbox';
import * as L from 'leaflet';
import {routerTransition} from '../../router.animations';

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

  private colour:Array<any> = [{
      backgroundColor: '#fff',
      borderColor: '#2287b0',
      pointBackgroundColor: '#2287b0',
      pointBorderColor: '#2287b0',
      pointHoverBackgroundColor: '#2287b0',
      pointHoverBorderColor: '#2287b0'
    }];

  private tideoptions: any = {
    responsive:false,
    maintainAspectRatio: true,
    legend:{display:false},
    scales:{yAxes:[{display:false}],xAxes:[{display:false,type: 'linear',position:'bottom'}]}
  };

  constructor(
    private route: ActivatedRoute,
    private tripdataService: TripdataService,
    private router: Router,
    private _lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.trip = this.tripdataService.getTripBySlug(this.slug);
    if(this.trip){
      for(let gallery of this.trip.gallery){
        this._album.push(gallery.image);
      }
      let coord = this.trip.map.map.centre.coordinates;
      let path = [];
      for(let pt of this.trip.map.map.path.coordinates){
        let newpt = [pt[1], pt[0]];
        path.push(newpt);
      }
      this.trip.options = {
        layers: [
          L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }),
          L.polyline(path,{color:'red'}),
        ],

        zoom: 14,
        zoomControl:true,
        center:L.latLng({lat: coord[1], lng: coord[0]})
      }
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

}
