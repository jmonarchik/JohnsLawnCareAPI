import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../../models/location';
import { Store } from '@ngrx/store';
import { LocationActions } from '../../actionHandlers/location.actions';

@Component({
  selector: 'app-locationInfo',
  templateUrl: 'locationInfo.component.html',
  styleUrls: ['locationInfo.component.css'],
})
export class LocationInfoComponent {
  locations: Array<Location>;
  locationSubscription: any;

  constructor(private _store: Store<any>, private _locationActions: LocationActions) { }

  public ngOnInit() {
    this.locationSubscription = this._store.select('locations').subscribe((locations: Array<Location>) => {
      this.locations = locations;
    });
  }
  public ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

  private getLocations(): void {
    this._locationActions.getLocations();
  }
}
