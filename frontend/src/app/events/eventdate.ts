interface TideTime {
  x: number;
  y: number;
}

interface Weather {
  id: number;
  title: string;
  slug: string;
  class_code: string;
}

export class Windy {
  hour: string;
  direction: number;
  speed: number;
  rain: number;
  celsius: number;
  water_celsius: number;
  cloud_base: number;
}

export class Eventdate {
  id: number;
  tide: Array<TideTime>;
  event_set: Array<any>;
  weather: Weather;
  plaevent_set: Array<any>;
  windy_set: Array<Windy>;
  trips_set: Array<any>;
  date: string;
  sun_rise: string;
  sun_set: string;
  temperature: number;
  created: string;
  modified: string;
  start: Date;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
