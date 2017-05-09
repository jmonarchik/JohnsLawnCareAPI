import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LocationsComponent} from './locations/locations.component'; 
import { CreateOrderComponent} from './create-order/create-order.component'; 
import { AdminLoginComponent} from './admin-login/admin-login.component'; 

export const router: Routes = [
    { path: '', redirectTo: 'locations', pathMatch: 'full' },
    { path: 'locations', component: LocationsComponent },
    { path: 'create-order', component: CreateOrderComponent },
    { path: 'admin-login', component: AdminLoginComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


