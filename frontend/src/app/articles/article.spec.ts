import {Article} from './article';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new Article()).toBeTruthy();
  });
  it('should accept values in the constructor', () =>{
    const article = new Article({
      title:'Article',
      is_featured: true,
      author: 'tester'
    });
    expect(article.title).toEqual('Article');
    expect(article.is_featured).toEqual(true);
  })
});
