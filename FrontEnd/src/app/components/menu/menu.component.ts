import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  //templateUrl: './menu.component.html',
  template: `
    <div *ngFor="let menu of menuItems">
      <h4>{{menu.pizzaSize}}</h4>
      <h4>{{menu.pizzaSizePrice}}</h4>
      <h4>{{menu.pizzaTopping}}</h4>
      <h4>{{menu.pizzaToppingPrice}}</h4>
    </div>
  `,
  //styleUrls: ['./menu.component.css']
  styles: [`
  
  `]
})
export class MenuComponent {
menuItems: Menu[] = [
  new Menu('Small Pizza','$3.99','Anchovies','$.99'),
  new Menu('Medium Pizza','$5.99','Pepperoni','$.99'),
  new Menu('Large Pizza','$7.99','Olives','$.99'),
  new Menu('X-Large Pizza','$9.99','Onions','$.99'),
]
}
