import { Injectable } from '@angular/core';
import {environment} from '../environment';
import { Http, Response } from '@angular/http';
import { Session } from './session';
import * as L from 'leaflet';

@Injectable()
export class SessiondataService {
  lastId: number = 0;
  sessions: Session[] =[];
  checking:boolean;

  constructor(private http: Http) { }

  getSession(){
    this.http.get(environment.API_ENDPOINT+'sessions')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json){
          let session = new Session(item);
          if(session.location){
            let coord = session.location.map.centre.coordinates;
            session.options = {
              layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }),
                L.marker({lat: coord[1], lng: coord[0]},{
                  icon: L.icon({
                    iconSize: [41,41],
                    iconAnchor: [20, 40],
                    iconUrl:'/static/map.svg',
                  })
                })
              ],
              zoom: 14,
              zoomControl:false,
              center:L.latLng({lat: coord[1], lng: coord[0]})
            }
          }
          this.addSession(session);
        }
      })
  }

  addSession(session: Session ): SessiondataService {
    if( !session.pk ){
      session.pk = ++this.lastId;
    }
    this.sessions.push(session);
    return this;
  }

  getAllSession(): Session[] {
    //this.getFaq();
    if (this.sessions.length == 0 && !this.checking){
      this.getSession();
      this.checking = true;
    }
    return this.sessions;
  }
}
