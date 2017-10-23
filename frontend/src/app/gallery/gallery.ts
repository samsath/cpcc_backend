import {Media} from '../media';

export class Gallery {
  pk: number;
  title: string;
  main_image: Media;
  slug: string;
  list_description: string;
  description: string;
  sort_value: number;
  gallery: Array<Media>;
  prev: string;
  next: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
