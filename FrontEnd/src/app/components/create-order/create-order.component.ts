import { Component } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
    selector: 'app-create-order',

    templateUrl:'create-order.component.html',

    styleUrls:['create-order.component.css'],
})
export class CreateOrderComponent {
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
}