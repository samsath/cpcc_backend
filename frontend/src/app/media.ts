export class Coord {
  type: string;
  coordinates;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Location {
  id:number;
  name:string;
  description:string;
  slug:string;
  content_type:number;
  created:string;
  centre:Coord;
  path:Coord;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Image{
  id: number;
  small: string;
  medium: string;
  large: string;
  original: string;
  src: string;
  description: string;
  slug: string;
  created: string;
  file: string;
  width: number;
  height: number;
  mimetype: string;
  content_type: number;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }
}

export class Media {
  id:number;
  image:Image;
  download:Object;
  embeded:Object;
  map:Location;
  pdf:Object;
  video:Object;
  name:string;
  description:string;
  slug:string;
  created:string;
  content_type: number;

  constructor( values: Object = {}) {
    Object.assign(this, values);
  }

}
