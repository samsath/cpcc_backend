import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../router.animations";
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-gallerylist',
  templateUrl: './gallerylist.component.html',
  animations: [routerTransition()],
  styleUrls: ['./gallerylist.component.scss'],
  host: {'[@routerTransition]': ''}
})
export class GallerylistComponent implements OnInit {

  gallery;
  image;

  constructor(
    private http: Http,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
    this.galleryService.getData();
  }

  get galleries(){
    return this.galleryService.getAllGallery()
  }

  trackByFn(index, item) {
    return item.id;
  }

}
