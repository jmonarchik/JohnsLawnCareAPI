import { Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {UPDATE_LOCATIONS} from '../stores/locations.store';

@Injectable()
export class LocationActions {

    constructor (private _store: Store<any>){}

    public getLocations(): void {
        const locationsResponse = [
            {
                "locationId": 1,
                "locationName": "Sandy Springs Pizza & Wings",
                "locationAddress": "1000 Abernathy Road, Atalnta, GA 31000",
                "locationPhoneNumber": "5558675309"
            },
            {
                "locationId": 2,
                "locationName": "Wright's Pizzeria",
                "locationAddress": "123 Main Street, Dunwoody, GA 31001",
                "locationPhoneNumber": "7778675309"
            },
            {
                "locationId": 3,
                "locationName": "Woodstock's Large Pizzeria",
                "locationAddress": "455 Large Circle, Woodstock, GA 30189",
                "locationPhoneNumber": "4789230102"
            }
        ];
        this._store.dispatch({
            "type": UPDATE_LOCATIONS,
            "payload": locationsResponse,
        });
        
    }
}