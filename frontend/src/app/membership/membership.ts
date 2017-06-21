export class Membership {
  id:number;
  title:string;
  is_public:boolean;
  is_featured:boolean;
  slug:string;
  created:string;
  modified:string;
  tagline:string;
  description:string;
  from_date:string;
  end_date:string;
  cost:string;
  sort_value:number;
  download: any;

  constructor(values: Object = {} ){
    Object.assign(this, values);
  }
}
