import { Component } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
    selector: 'app-create-order',

    templateUrl:'create-order.component.html',

    styleUrls:['create-order.component.css'],
})
export class CreateOrderComponent {
toppings: Topping[] = [
   new Topping('1','Mushrooms','100','$.99'),
   new Topping('2','Olives','100','$.99'),
   new Topping('3','Pepperoni','100','$.99'),
   new Topping('4','Cheese','100','$.99'),
   new Topping('5','Ham','100','$.99'),
   new Topping('6','Bacon','100','$.99'),
   new Topping('7','Pineapple','100','$.99'),
   new Topping('8','Peppers','100','$.99'),
   new Topping('9','Anchovies','100','$.99'),
   new Topping('10','Basil','100','$.99'),
   new Topping('11','Ground Beef','100','$.99'),
   new Topping('12','Garlic','100','$.99'),
   new Topping('13','Tomatoes','100','$.99'),
   new Topping('14','Onions','100','$.99'),
   new Topping('15','Zucchini','100','$.99'),
   new Topping('16','Spinach','100','$.99'),
   new Topping('17','Sausage','100','$.99'),
   new Topping('18','Salami','100','$.99'),
   new Topping('19','Chicken','100','$.99'),
   new Topping('20','Artichoke','100','$.99'),
    ]
}