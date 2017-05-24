import { Component, OnInit } from '@angular/core';
import { routes } from '../../routes/app.router';

@Component({
  selector: 'app-admin-login',
 
  templateUrl:'admin-login.component.html',
  styleUrls:['admin-login.component.css'],
})
export class AdminLoginComponent {
  isToppingVisible: boolean = false;
  isLocationVisible: boolean = false;
  isOrderVisible: boolean = false;
  isOrder2Visible: boolean = false;

  private editToppings(): void
  {
    this.isToppingVisible = !this.isToppingVisible;
  }

  private editLocations(): void
  {
    this.isLocationVisible = !this.isLocationVisible;
  }

  private editOrders(): void
  {
    this.isOrderVisible = !this.isOrderVisible;
  }

  private editOrder2(): void
  {
    this.isOrder2Visible = !this.isOrder2Visible;
  }
}
