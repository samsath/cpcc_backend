import {Component, Input, OnInit} from '@angular/core';
import { Article } from '../articles/article';
import {Router} from "@angular/router";

@Component({
  selector: 'app-square-item',
  templateUrl: './square-item.component.html',
  styleUrls: ['./square-item.component.scss']
})
export class SquareItemComponent implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  offset = 100;

  @Input()
  article: Article;

  @Input()
  endpoint: string;

  constructor(private router: Router) { }

  goToEndpoint(){
    this.router.navigate([this.endpoint,this.article.slug]);
  }

  ngOnInit() {
  }

}
