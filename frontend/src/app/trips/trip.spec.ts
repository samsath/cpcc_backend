import {Trip} from './trip';

describe('Trip', () => {
  it('should create an instance', () => {
    expect(new Trip()).toBeTruthy();
  });
  it('should accept values in the constructire', ()=>{
    const trip = new Trip({
      id:0,
      title:'trip',
    });
    expect(trip.id).toEqual(0);
    expect(trip.title).toEqual('trip');
  })
});
