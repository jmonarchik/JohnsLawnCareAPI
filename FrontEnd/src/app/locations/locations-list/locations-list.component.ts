import { Component, OnInit } from '@angular/core';
import { Location } from '../location.model';
@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
locations: Location[] = [
  new Location('Wrights Pizzeria','1000 Aberquacky Road','Atlanta','Georgia','30632',
  'http://roamilicious.com/wp-content/uploads/2016/03/Vero-pizza-atlanta.jpg'),
  new Location('Downtown Dumpster Pizza','123 Crack Road','Atlanta','Georgia','30671',
  'http://storage.googleapis.com/zgt-user/CrustPizzeria_Atlanta.jpg'),
  new Location('Hogan has no Heroes Pizza','4567 Peachtree road','Atlanta','Georgia','30679',
  'http://www.rantlifestyle.com/wp-content/uploads/2014/03/antico-pizza-atlanta.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
