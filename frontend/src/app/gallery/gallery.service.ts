import { Injectable } from '@angular/core';
import { Gallery} from "./gallery";
import { environment } from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class GalleryService {

  gallerys: Gallery[] = [];
  checking = false;

  constructor(private http: Http) { }

  getData(){
    this.http.get(environment.API_ENDPOINT+'gallery')
      .map((res: Response) => res.json())
      .subscribe((json: Array<Object>) => {
        this.checking = true;
        for (let item of json){
          let gallery = new Gallery(item);
          this.addGallery(gallery);
        }
      })
  }

  addGallery(gallery: Gallery) : GalleryService {
    if(!this.gallerys.find(x => x.pk == gallery.pk)){
      this.gallerys.push(gallery);
    }
    return this;
  }

  getAllGallery(): Gallery[] {
    if (this.gallerys.length == 0 && !this.checking){
      this.getData();
      this.checking = true;
    }
    return this.gallerys;
  }

  getGalleryBySlug(slug: string): Gallery{
    if(!this.gallerys){
      this.http.get(environment.API_ENDPOINT+'gallery/'+slug)
        .map((res:Response) => res.json())
        .subscribe((json: Object) =>{
          let gallery = new Gallery(json);
          this.addGallery(gallery);
          return gallery;
        })
    }else{
      return this.gallerys
        .filter(gallery => gallery.slug == slug)
        .pop()
    }
  }




}
