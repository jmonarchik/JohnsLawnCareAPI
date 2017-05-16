import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from '../components/app/app.component';
import { AdminLoginComponent } from '../components/admin-login/admin-login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const router: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'adminLogin', component: AdminLoginComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);