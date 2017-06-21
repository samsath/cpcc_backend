export class Faq {
  id: number;
  question: string;
  answer: string;
  sort_value: number;

  constructor(values: Object = {} ){
    Object.assign(this, values);
  }
}
