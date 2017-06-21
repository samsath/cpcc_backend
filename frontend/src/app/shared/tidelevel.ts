export class Tidelevel {
  id: number;
  level: number;
  percentage: number;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}
