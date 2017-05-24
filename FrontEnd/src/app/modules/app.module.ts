import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from '../routes/app.router';

import { APP_COMPONENTS } from '../components/app.components';
import {APP_STORES} from '../stores/app.stores';
import {APP_ACTIONS} from '../actionHandlers/app.actionHandlers';
import { AppComponent } from '../components/app/app.component';

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ...APP_STORES,
  ],
  providers: [
    ...APP_ACTIONS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
