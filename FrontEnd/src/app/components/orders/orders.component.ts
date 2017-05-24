import { Component } from '@angular/core';
import { Order } from '../../models/order';

@Component({
    selector: 'app-orders',

    templateUrl: 'orders.component.html',

    styles: [`
    
    `],
})
export class OrdersComponent {
    orders: Order[] = [];
}