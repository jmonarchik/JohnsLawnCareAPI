import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UPDATE_PIZZA_SIZE } from '../stores/pizzaSize.store';

@Injectable()
export class PizzaSizeActions {

    constructor(private _store: Store<any>) { }

    public getPizzaSizes(): void {
        const pizzaSizesResponse = [
            {
                "pizzaSizeId": 1,
                "pizzaSizeName": "Small",
                "pizzaSizeQuantity": 100,
                "checked": false
            },
            {
                "pizzaSizeId": 2,
                "pizzaSizeName": "Medium",
                "pizzaSizeQuantity": 100,
                "checked": false
            },
            {
                "pizzaSizeId": 3,
                "pizzaSizeName": "Large",
                "pizzaSizeQuantity": 100,
                "checked": false
            },
            {
                "pizzaSizeId": 4,
                "pizzaSizeName": "Extra-Large",
                "pizzaSizeQuantity": 100,
                "checked": false
            }

        ];
        this._store.dispatch({
            "type": UPDATE_PIZZA_SIZE,
            "payload": pizzaSizesResponse,
        });
    }
}