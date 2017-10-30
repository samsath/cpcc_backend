import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import * as L from 'leaflet';

@Injectable()
export class TripdataService {
  checking:boolean;
  trips: Trip[] = [];

  constructor(private http: Http) { }

  getTrip(){
    this.http.get(environment.API_ENDPOINT+'trips')
      .map((res: Response) => res.json())
      .subscribe((json:Array<Object>) => {
        for(let item of json){
          let trip = new Trip(item);
          if(trip.map) {
            let coord = trip.map.map.centre.coordinates;
            trip.options = {
              layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {maxZoom: 18}),
                L.marker({lat: coord[1], lng: coord[0]})
              ],
              zoom: 14,
              zoomControl: false,
              center: L.latLng({lat: coord[1], lng: coord[0]})
            };
          }
          this.addTrip(trip);
        }
      })
  }

  addTrip(trip: Trip): TripdataService{
    this.trips.push(trip);
    return this;
  }

  getAllTrips(): Trip[]{
    if(this.trips.length == 0 && !this.checking){
      this.getTrip();
      this.checking = true;
    }
    return this.trips;
  }

  getTripBySlug(slug: string): Trip{
    return this.trips
      .filter(trip => trip.slug === slug)
      .pop()
  }

  getRemoteTripBySlug(slug: string): Promise<Trip>{
    return this.http.get(environment.API_ENDPOINT + 'trips/' + slug)
    .map((res: Response) => res.json()).toPromise();
  }

}
