import { Component } from '@angular/core';
import { OrdersComponent } from '../orders/orders.component';

@Component({
    selector: 'app-order-tracker',

    templateUrl:'order-tracker.component.html',
        

    styleUrls:['order-tracker.component.css'],
})
export class OrderTrackerComponent {
    isTrackerVisible: boolean = false;

    private trackOrder(): void
    {
        this.isTrackerVisible = !this.isTrackerVisible;
    }
}