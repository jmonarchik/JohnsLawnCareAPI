import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UPDATE_PIZZA_SIZE } from '../stores/pizzaSize.store';

@Injectable()
export class PizzaSizeActions {

    constructor(private _store: Store<any>) { }

    public getPizzaSizes(): void {

        this._store.dispatch({
            "type": UPDATE_PIZZA_SIZE,
            "payload": mockPizzaSizesResponse,
        });
    }
}
const mockPizzaSizesResponse = [
    {
        "pizzaSizeId": 1,
        "pizzaSizeName": "Small",
        "checked": false
    },
    {
        "pizzaSizeId": 2,
        "pizzaSizeName": "Medium",
        "checked": false
    },
    {
        "pizzaSizeId": 3,
        "pizzaSizeName": "Large",
        "checked": false
    },
    {
        "pizzaSizeId": 4,
        "pizzaSizeName": "Extra-Large",
        "checked": false
    }

];