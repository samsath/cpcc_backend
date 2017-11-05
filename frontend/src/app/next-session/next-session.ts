interface TideTime {
  x: number;
  y: number;
}

export class NextSession {
  date: string;
  content: string;
  club: boolean;
  membersonly: boolean;
  temp: string;
  weather: number;
  tide: Array<TideTime>;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }

  fromJSON(json) {
    for (var propName in json)
      this[propName] = json[propName];
    return this;
  }
}
