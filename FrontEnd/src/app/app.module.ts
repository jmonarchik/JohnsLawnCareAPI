import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LocationsListComponent } from './locations/locations-list/locations-list.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    CreateOrderComponent,
    AdminLoginComponent,
    LocationsListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
