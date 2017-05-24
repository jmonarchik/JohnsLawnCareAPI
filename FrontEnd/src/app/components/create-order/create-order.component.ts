import { Component } from '@angular/core';
import { Topping } from '../../models/topping';

@Component({
    selector: 'app-create-order',

    templateUrl: 'create-order.component.html',

    styleUrls: ['create-order.component.css'],
})
export class CreateOrderComponent {
    toppings: Topping[] = [];
}