import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from '../components/app/app.component';
import { AdminLoginComponent } from '../components/admin-login/admin-login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CreateOrderComponent } from '../components/create-order/create-order.component';
import { LocationsComponent } from '../components/locations/locations.component';
import { MenuComponent } from '../components/menu/menu.component';
import { OrderTrackerComponent } from '../components/order-tracker/order-tracker.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { ToppingsComponent } from '../components/toppings/toppings.component';


export const router: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'adminLogin', component: AdminLoginComponent },
    { path: 'createOrder', component: CreateOrderComponent},
    { path: 'locations', component: LocationsComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'orderTracker', component: OrderTrackerComponent},
    { path: 'orders', component: OrdersComponent},
    { path: 'toolbar', component: ToolbarComponent},
    { path: 'toppings', component: ToppingsComponent},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);