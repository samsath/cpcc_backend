import { Injectable } from '@angular/core';
import { Tidelevel } from './tidelevel';

@Injectable()
export class TidelevelDataService {
  lastId: 0;
  tidelevels: Tidelevel[] = [];

  constructor() { }

  addTideLevel(tidelevel: Tidelevel): TidelevelDataService {
    if ( !tidelevel.id ) {
      tidelevel.id = ++this.lastId;

    }
    this.tidelevels.push(tidelevel);
    return this;
  }

  deleteTideLevel(id: number): TidelevelDataService {
    this.tidelevels = this.tidelevels
      .filter(tidelevels => tidelevels.id !== id);
    return this;
  }

  getAllTides(): Tidelevel[] {
    return this.tidelevels;
  }

  getTideLevelById(id: number): Tidelevel {
    return this.tidelevels
      .filter(tidelevels => tidelevels.id === id)
      .pop();
  }

  updateTideLevel(id: number, value: Object = {}): Tidelevel {
    const tide = this.getTideLevelById(id);
    if ( !tide ) {
      return null;
    }
    Object.assign(tide, value);
    return tide;
  }

}
