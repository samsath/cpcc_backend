import {NextSession} from './next-session';

describe('NextSession', () => {
  it('should create an instance', () => {
    expect(new NextSession()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
      const nextses = new NextSession({
        date: '12 March 2016',
        content: 'All is welcome to the club',
        club: true,
        temp: '20 degress',
        weather: 3,
        tide: '343433'
      });
      expect(nextses.date).toEqual('12 March 2016');
      expect(nextses.membersonly).toEqual(false);
    });
});
