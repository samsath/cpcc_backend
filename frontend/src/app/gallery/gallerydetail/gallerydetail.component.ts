import { Component, OnInit } from '@angular/core';
import { Gallery} from "../gallery";
import { GalleryService} from "../gallery.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {routerTransition} from '../../router.animations';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-gallerydetail',
  templateUrl: './gallerydetail.component.html',
  styleUrls: ['./gallerydetail.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GallerydetailComponent implements OnInit {
  gallery: Gallery;
  public slug;
  private _album = [];

  constructor(
   private route: ActivatedRoute,
   private galleryService: GalleryService,
   private router: Router,
   private _lightbox: Lightbox,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.slug = params['slug']
      });
    this.gallery = this.galleryService.getGalleryBySlug(this.slug);
    if(this.gallery){
      for (let gallery of this.gallery.gallery){
        this._album.push(gallery.image);
      }
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

}
