export class Author {
  pk:number;
  username:string;
  first_name:string;
  last_name:string;
  email:string;
  fullname:string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}

export class Newsletter {
  id: number;
  author: Author;
  title: string;
  is_public:boolean;
  is_featured:boolean;
  slug: string;
  created:string;
  modified:string;
  number: string;
  postdate: string;
  sort_value: number;
  newsletter: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
