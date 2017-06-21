import {Component, Input, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environment';

@Component({
  selector: 'app-mainimage',
  templateUrl: './mainimage.component.html',
  styleUrls: ['./mainimage.component.scss']
})
export class MainimageComponent implements OnInit {
  defaultImage = 'http://127.0.0.1:8000/media/media/images/IMG_8442.JPG';
  offset = 100;

  @Input()
  image:string;

  @Input()
  map:string;

  constructor(private http: Http) { }

  ngOnInit() {
    if(this.image == null){
      this.http.get(environment.API_ENDPOINT+'homepageimage')
        .map((res: Response) => res.json()).subscribe((json: Object) =>{
        this.image = json['main_image']['image']['file'];
      });
    }

  }

}
