import { Faq } from './faq';

describe('Faq', () => {
  it('should create an instance', () => {
    expect(new Faq()).toBeTruthy();
  });
  it('should accept values in the construtor', () => {
    const faq = new Faq({
      id:1,
      question:"Question one",
      answer:"answer elemsnt",
      sort_value:"one"
    });
    expect(faq.id).toEqual(1);
    expect(faq.question).toEqual("Question one");
  })

});
