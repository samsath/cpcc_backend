import {Tidelevel} from './tidelevel';

describe('Tidelevel', () => {
  it('should create an instance', () => {
    expect(new Tidelevel()).toBeTruthy();
  });

  it('should accept tide level', () => {
    const tide = new Tidelevel({
      level: 50,
      percentage: 0
    });
    expect(tide.level).toEqual(50);
    expect(tide.percentage).toEqual(0);
  });
});
