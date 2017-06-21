import {Media} from '../media';

export class Article {
  pk: number;
  title: string;
  post_date: string;
  main_image: Object;
  is_featured: boolean;
  is_public: boolean;
  slug: string;
  list_description: string;
  description: string;
  author: Object;
  sort_value: number;
  category: Array<Object>;
  gallery: Array<Media>;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}

