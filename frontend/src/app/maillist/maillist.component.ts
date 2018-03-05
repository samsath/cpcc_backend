import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, Jsonp } from '@angular/http';
import { environment } from '../../environments/environment';
import {routerTransition} from '../router.animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mailist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MaillistComponent implements OnInit {

  mailForm: FormGroup;
  mailcomplete = false;

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.mailForm = new FormGroup({
      'email': new FormControl(),
      'name': new FormControl(),
      'lastname': new FormControl(),
      'b_608521f94ccfeee308925028f_1068db21b2': new FormControl()
    });
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
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
