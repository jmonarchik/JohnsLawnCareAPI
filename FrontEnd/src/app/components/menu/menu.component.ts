import { Component, OnInit } from '@angular/core';
import { Topping } from '../../models/topping';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-menu',

  templateUrl: 'menu.component.html',

  styleUrls: ['menu.component.css']
})
export class MenuComponent {
  toppings: Topping[] = [];

  pizzas: Pizza[] = [];
}
