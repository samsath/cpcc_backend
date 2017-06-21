import { Injectable } from '@angular/core';
import {Membership} from './membership';
import {environment} from '../environment';
import { Http, Response } from '@angular/http';

@Injectable()
export class MembershipService {
  checking:boolean;
  memberships: Membership[]=[];

  constructor(private http: Http) { }

  getMembership(){
    this.http.get(environment.API_ENDPOINT+'membership')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json){
          let member = new Membership(item);
          this.addMembership(member);
        }
      })
  }

  addMembership(membership: Membership ): MembershipService {
    this.memberships.push(membership);
    return this;
  }

  getAllMembership(): Membership[] {
    if(this.memberships.length == 0 && !this.checking){
      this.getMembership();
      this.checking = true;
    }
    return this.memberships;
  }


  getFeatureMembership(): Membership{
    let member = this.memberships
      .filter(memers => memers.is_featured == true)
      .pop();
    return member;
  }

}
