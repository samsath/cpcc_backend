import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { environment } from '../../environments/environment';
import {routerTransition} from '../router.animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EnquiryComponent implements OnInit {

  image;
  mainForm: FormGroup;
  mailForm: FormGroup;
  maincomplete = false;
  mailcomplete = false;


  constructor(private http: Http) {

  }

  ngOnInit() {
    this.mainForm = new FormGroup({
      'email': new FormControl(),
      'name': new FormControl(),
      'comment': new FormControl()
    });

    this.mailForm = new FormGroup({
      'email': new FormControl(),
      'name': new FormControl(),
      'lastname': new FormControl(),
      'b_608521f94ccfeee308925028f_1068db21b2': new FormControl()
    });

    this.http.get(environment.API_ENDPOINT+'pageimage')
      .map((res: Response) => res.json()).subscribe((json: Object) =>{
      this.image = json[0]['main_image']['image'];
    });
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
  }


  mainsend(form: any): void {
    let formObj = this.mainForm.value;
    let simledata = JSON.stringify(formObj);
    console.log(simledata);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('X-CSRFToken', this.getCookie('csrftoken'));
    this.http
      .post(environment.API_ENDPOINT+'enquiry',simledata, {headers: headers})
      .subscribe( ret_data => {
        this.maincomplete = true;
        this.mainForm.reset();
      }, error => {
        console.log(error.json());
      });

  }

  mailsend(form: any): void {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http
      .post('//chiswickcanoeclub.us10.list-manage.com/subscribe/post?u=608521f94ccfeee308925028f&amp;id=1068db21b2',
        JSON.stringify({ EMAIL: form.email, FNAME: form.name, LNAME: form.last_name, b_608521f94ccfeee308925028f_1068db21b2: form.b_608521f94ccfeee308925028f_1068db21b2  }),{headers: headers})
      .subscribe( ret_data => {
        console.log(ret_data);
        this.mailcomplete = true;
        this.mailForm.reset();
        form.reset();
      }, error => {
      });
  }

}
