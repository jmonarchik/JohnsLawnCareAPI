import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location';

@Component({
  selector: 'app-locations-table',
 //templateUrl: './locations-table.component.html',
 template:`
  <div *ngFor="let location of locations">
    <h4>{{location.locationName}}</h4>
    <h4>{{location.locationStreet}}</h4>
    <h4>{{location.locationState}}</h4>
    <h4>{{location.locationZip}}</h4>
  </div>
 `,
 //styleUrls: ['./locations-table.component.css']
 styles:[`
 
 `],
})
export class LocationsTableComponent  {
  locations: Location[] = [
    new Location('Peachtree Pies','123 Peachtree Street','Georgia','30326'),
    new Location('Wrights Downtown Slices','374 Piedmont Road','Georgia','30324'),
    new Location('ATL Pizzas','4683 Collier Road','Georgia','30341')
  ];

  
}
