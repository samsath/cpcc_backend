import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleDataService } from '../article-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'angular2-lightbox';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-articlesdetail',
  templateUrl: './articlesdetail.component.html',
  styleUrls: ['./articlesdetail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ArticlesdetailComponent implements OnInit {
  article: Article;
  public slug;
  private _album = [];

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataService,
    private router: Router,
    private _lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.article = this.articleDataService.getArticleBySlug(this.slug);
    if(this.article){
      for (let gallery of this.article.gallery){
        this._album.push(gallery.image);
      }
    }

  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

}
