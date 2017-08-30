import { Injectable } from '@angular/core';
import { Article } from './article';
import { environment } from '../../environments/environment';
import {Http, Response} from '@angular/http';



@Injectable()
export class ArticleDataService {

  articles: Article[] = [];
  checking:boolean;

  constructor(private http: Http) { }

  getData(){
    this.http.get(environment.API_ENDPOINT+'article')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        for (let item of json){
          let article = new Article(item);
          this.addArticle(article);
        }
      })
  }

  addArticle(article: Article ): ArticleDataService {
    this.articles.push(article);
    return this;
  }

  getAllArticles(): Article[] {
    if (this.articles.length == 0 && !this.checking){
      this.getData();
      this.checking = true;
    }
    return this.articles;
  }

  getArticleBySlug(slug: string ): Article{
    if(!this.articles){
      this.http.get(environment.API_ENDPOINT+'article/'+slug)
        .map((res:Response) => res.json())
        .subscribe((json: Object) =>{
          return new Article(json);
        })
    }else{
      return this.articles
        .filter(article => article.slug == slug)
        .pop()
    }
  }

  getArticleForCategory(slug: string): Article{
    return this.articles
      .filter(article => article.category.indexOf(slug) !== -1)
      .pop()
  }

}
