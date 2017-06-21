import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripdataService } from '../tripdata.service';
import * as L from 'leaflet';
import { Http, Response } from '@angular/http';
import { environment } from '../../environment';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class TriplistComponent implements OnInit {

  image;

  constructor(private http: Http,private tripdataservice: TripdataService) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  get trips(){
    return this.tripdataservice.getAllTrips();
  }

}
