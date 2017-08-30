import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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
      'name': new FormControl()
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
    console.log(form);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('X-CSRFToken', this.getCookie('csrftoken'));
    this.http
      .post(environment.API_ENDPOINT+'enquiry',
        JSON.stringify({ email: form.email, name: form.name, comment: form.comment }),{headers: headers})
      .subscribe( ret_data => {
        console.log(ret_data);
        this.maincomplete = true;
        this.mainForm.reset();
      }, error => {
        console.log(error.json());
      });

  }

  mailsend(form: any): void {
    console.log(form);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('X-CSRFToken', this.getCookie('csrftoken'));
    this.http
      .post(environment.API_ENDPOINT+'newsletter',
        JSON.stringify({ email: form.email, name: form.name }),{headers: headers})
      .subscribe( ret_data => {
        console.log(ret_data);
        this.mailcomplete = true;
        this.mailForm.reset();
        form.reset();
      }, error => {
        console.log(error.json());
      });
  }

}
