import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '../../models/location';
import { Store } from '@ngrx/store';
import { LocationActions } from '../../actionHandlers/location.actions';

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.component.html',
  styleUrls: ['locations.component.css'],
})
export class LocationsComponent implements OnInit, OnDestroy {
  locations: Array<Location>;
  locationsSubscription: any;
  isAddLocationVisible: boolean = false;
  isEditLocationVisible: boolean = false;
  isDeleteLocationVisible: boolean = false;
  isGetLocationsVisible: boolean = false;

  constructor(private _store: Store<any>, private _locationActions: LocationActions) { }

  public ngOnInit() {
    this.locationsSubscription = this._store.select('locations').subscribe((locations: Array<Location>) => {
      this.locations = locations;
    });
  }

  public ngOnDestroy() {
    this.locationsSubscription.unsubscribe();
  }

  private addLocation(): void {
    this.isAddLocationVisible = !this.isAddLocationVisible;
  }

  private editLocation(): void {
    this.isEditLocationVisible = !this.isEditLocationVisible;
  }

  private deleteLocation(): void {
    this.isDeleteLocationVisible = !this.isDeleteLocationVisible;
  }

  private getLocations(): void {
    this.isGetLocationsVisible = !this.isGetLocationsVisible;
    this._locationActions.getLocations();
  }
}