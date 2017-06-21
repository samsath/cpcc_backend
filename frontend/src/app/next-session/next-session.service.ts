import { Injectable } from '@angular/core';
import { NextSession } from './next-session';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environment';
import 'rxjs/add/operator/map';

@Injectable()
export class NextSessionService {


  getSession() {
    return this.http.get(environment.API_ENDPOINT+'nextsession')
      .map((res: Response) => res.json())

  }


  constructor(private http: Http) { }

}
