import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UPDATE_TOPPINGS } from '../stores/toppings.store';

@Injectable()
export class ToppingActions {

    constructor(private _store: Store<any>) { }

    public getToppings(): void {
        const toppingsResponse = [
            {
                "toppingId": 1,
                "toppingName": "Mushrooms",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 2,
                "toppingName": "Olives",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 3,
                "toppingName": "Pepperoni",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 4,
                "toppingName": "Cheese",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 5,
                "toppingName": "Ham",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 6,
                "toppingName": "Bacon",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 7,
                "toppingName": "Pinapple",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 8,
                "toppingName": "Peppers",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 9,
                "toppingName": "Anchovies",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 10,
                "toppingName": "Basil",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 11,
                "toppingName": "Ground Beef",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 12,
                "toppingName": "Garlic",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 13,
                "toppingName": "Tomatos",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 14,
                "toppingName": "Onions",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 15,
                "toppingName": "Zucchini",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 16,
                "toppingName": "Spinach",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 17,
                "toppingName": "Sausage",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 18,
                "toppingName": "Salami",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 19,
                "toppingName": "Chicken",
                "toppingQuantity": 100,
                "checked": false
            },
            {
                "toppingId": 20,
                "toppingName": "Artichoke",
                "toppingQuantity": 100,
                "checked": false
            }
        ];
        this._store.dispatch({
            "type": UPDATE_TOPPINGS,
            "payload": toppingsResponse,
        });
    }
}