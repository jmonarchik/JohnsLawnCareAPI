import { Component } from '@angular/core';
import { Order } from '../../models/order';

@Component({
    selector: 'app-orders',

    templateUrl:'orders.component.html',

    styles:[`
    
    `],
})
export class OrdersComponent {
orders: Order[] =[
    new Order("Wrights Pizzeria","4","pepperoni, peppers", "out for delivery","Havel","$16.99",
    "(404)452-6512","4:32 PM"),
]
}