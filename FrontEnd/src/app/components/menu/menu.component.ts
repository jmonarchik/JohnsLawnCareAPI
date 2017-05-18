import { Component, OnInit } from '@angular/core';
import { Topping } from '../../models/topping';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-menu',
  
  templateUrl: 'menu.component.html',
  
  styleUrls: ['menu.component.css']
})
export class MenuComponent {
 toppings: Topping[] = [
   new Topping('Mushrooms','100','$.99'),
   new Topping('Olives','100','$.99'),
   new Topping('Pepperoni','100','$.99'),
   new Topping('Cheese','100','$.99'),
   new Topping('Ham','100','$.99'),
   new Topping('Bacon','100','$.99'),
   new Topping('Pineapple','100','$.99'),
   new Topping('Peppers','100','$.99'),
   new Topping('Anchovies','100','$.99'),
   new Topping('Basil','100','$.99'),
   new Topping('Ground Beef','100','$.99'),
   new Topping('Garlic','100','$.99'),
   new Topping('Tomatoes','100','$.99'),
   new Topping('Onions','100','$.99'),
   new Topping('Zucchini','100','$.99'),
   new Topping('Spinach','100','$.99'),
   new Topping('Sausage','100','$.99'),
   new Topping('Salami','100','$.99'),
   new Topping('Chicken','100','$.99'),
   new Topping('Artichoke','100','$.99'),
 ]

 pizzas: Pizza[] = [
   new Pizza('Small','$6.99'),
   new Pizza('Medium','$8.99'),
   new Pizza('Large','$11.99'),
   new Pizza('Extra-Large','$15.99'),
 ]
}
