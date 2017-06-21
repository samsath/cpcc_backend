import {Newsletter} from './newsletter';

describe('Newsletter', () => {
  it('should create an instance', () => {
    expect(new Newsletter()).toBeTruthy();
  });
  it('should accept values in the constructor', () =>{
    const newsletter = new Newsletter({
      id:1,
      number:"No. 97",
      title:"To putney and back",
      date:"12/2/2018",
      sort_value:1,
      content:"<html><body>hi</body></html>"
    });
    expect(newsletter.number).toEqual('To putney and back');
    expect(newsletter.id).toEqual(1);
  })
});
