import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chiswick Pier Canoe Club';
  image = 'https://f58619eed67ecf47f9c5-69635130c45beb2524d5bafa9c042fe0.ssl.cf3.rackcdn.com/heroImages/_2000xAUTO_crop_center-center_70/Claire-Williams-nature-environment-wildlife.jpg';
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}
