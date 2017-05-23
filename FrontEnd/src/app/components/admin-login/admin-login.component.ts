import { Component, OnInit } from '@angular/core';
import { routes } from '../../routes/app.router';

@Component({
  selector: 'app-admin-login',
 
  templateUrl:'admin-login.component.html',
  styleUrls:['admin-login.component.css'],
})
export class AdminLoginComponent {
isToppingsVisible: boolean = false;
isLocationsVisible: boolean = false;
isOrdersVisible: boolean = false;

  private editToppings(): void
  {
    this.isToppingsVisible = !this.isToppingsVisible;
  }

  private editLocations(): void
  {
    this.isLocationsVisible = !this.isLocationsVisible;
  }

  private editOrders(): void
  {
    this.isOrdersVisible = !this.isOrdersVisible;
  }
}
