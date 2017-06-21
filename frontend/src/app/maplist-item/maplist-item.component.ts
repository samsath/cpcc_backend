import {Component, Input, OnInit} from '@angular/core';
import { Trip } from '../trips/trip';

@Component({
  selector: 'app-maplist-item',
  templateUrl: './maplist-item.component.html',
  styleUrls: ['./maplist-item.component.scss']
})
export class MaplistItemComponent implements OnInit {

  @Input()
  trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
