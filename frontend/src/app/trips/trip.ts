import {Media} from '../media';

interface TideTime {
  x: number;
  y: number;
}

export class Day {
  id:number;
  tide: Array<TideTime>;
  date:string;
  sun_rise:string;
  sun_set:string;
  temperature:number;
  created:string;
  modified:string;
  weather:number;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }

}

export class TripExtra {
  id:number;
  title:string;
  value:string;
  sort_value:number;
  created:string;
  modified:string;
  trips: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }

}

export class Trip {
  id: number;
  extrafields_set:Array<TripExtra>;
  map:Media;
  main_image:Media;
  gallery:Array<Media>;
  title: string;
  is_public:boolean;
  is_featured:boolean;
  slug:string;
  created:string;
  modified:string;
  list_description:string;
  description:string;
  start_date:string;
  end_date:string;
  day:Day;
  options:Object;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
