import { NextSession } from '../next-session/next-session';
import {Media} from '../media';

export class Session {
  pk:number;
  title:string;
  description:string;
  cost:string;
  day_of_week:string;
  sort_value:number;
  location:Media;
  created:string;
  modified:string;
  nextsession:NextSession;
  centre:Object;
  path:Array<Object>;
  options:Object;
  link:string;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}
