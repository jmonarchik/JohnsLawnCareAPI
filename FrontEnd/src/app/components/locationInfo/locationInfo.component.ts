import { Component } from '@angular/core';
import { Location } from '../../models/location';

@Component({
    selector: 'app-locationInfo',

    templateUrl: 'locationInfo.component.html',

    styleUrls: ['locationInfo.component.css'],
})
export class LocationInfoComponent {
locations: Location[] = [
  new Location('Wrights Pizzeria','294 Collier Road','Atlanta','Georgia','30984',
  'https://ioneadwnews.files.wordpress.com/2014/07/buckhead-pizza.jpg?w=1024&h=682'),
  new Location('Downtown Pizzeria','123 Stratford Road','Atlanta','Georgia','30671',
  'https://cdn0.vox-cdn.com/uploads/chorus_image/image/38685210/tumblr_midt2a40Ya1s0uk7ao1_1280.0.jpg'),
  new Location('Peachtree Pizzeria','4567 Peachtree Road','Atlanta','Georgia','30679',
  'http://roamilicious.com/wp-content/uploads/2016/03/Vero-pizza-oven-Brookhaven-700x400.jpg')
];
}