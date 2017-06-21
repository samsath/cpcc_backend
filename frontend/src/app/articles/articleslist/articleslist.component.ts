import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleDataService } from '../article-data.service';
import { Http, Response } from '@angular/http';
import { environment } from '../../environment';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-articleslist',
  templateUrl: './articleslist.component.html',
  styleUrls: ['./articleslist.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ArticleslistComponent implements OnInit {

  image;

  constructor(
    private http: Http,
    private articleDataService: ArticleDataService) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  get articles(){
    return this.articleDataService.getAllArticles();
  }

}
