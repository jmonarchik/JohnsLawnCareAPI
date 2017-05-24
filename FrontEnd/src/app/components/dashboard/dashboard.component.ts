import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../../models/location';
import { Topping } from '../../models/topping';
import { Store } from '@ngrx/store';
import { LocationActions } from '../../actionHandlers/location.actions';
import { ToppingActions } from '../../actionHandlers/topping.actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent {
  locations: Array<Location>;
  locationSubscription: any;
  isLocationsVisible: boolean = false;
  isMenuVisible: boolean = false;

  constructor(private _store: Store<any>, private _locationActions: LocationActions) { }

  public ngOnInit() {
    this.locationSubscription = this._store.select('locations').subscribe((locations: Array<Location>) => {
      this.locations = locations;
    });
  }

  public ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

  private toggleVisibilityOfLocations(): void {
    this.isLocationsVisible = !this.isLocationsVisible;
    this._locationActions.getLocations();
  }

  private toggleVisibilityOfMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

}