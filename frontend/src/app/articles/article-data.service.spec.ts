import { TestBed, inject } from '@angular/core/testing';
import { Article } from './article';
import { ArticleDataService } from './article-data.service';

describe('ArticleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleDataService]
    });
  });

  it('should ...', inject([ArticleDataService], (service: ArticleDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllArticles()', () => {
    it('should return an empty array by default', inject([ArticleDataService], (service: ArticleDataService) =>{
      expect(service.getAllArticles()).toEqual([]);
    }));
    it('should return all articles', inject([ArticleDataService], (service: ArticleDataService) =>{
      const art1 = new Article({title:'a',author:'b'});
      const art2 = new Article({title:'c',author:'d'});
      service.addArticle(art1);
      service.addArticle(art2);
      expect(service.getAllArticles()).toEqual([art1, art2]);
    }))
  });

});
