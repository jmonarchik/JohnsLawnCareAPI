import { Action } from '@ngrx/store';
import { Topping } from '../models/topping';

//Action Types
export const
    UPDATE_TOPPINGS = "UPDATE_TOPPINGS",
    DELETE_TOPPING = "DELETE_TOPPING",
    DELETE_TOPPINGS = "DELETE_TOPPINGS",
    INSERT_TOPPING = "INSERT_TOPPING";

const toppingsInitialState: Array<Topping> = [];

export const toppings = (state: Array<Topping> = toppingsInitialState, action: Action) => {
    switch (action.type) {
        case UPDATE_TOPPINGS:
            return action.payload;

        case DELETE_TOPPING:
            const toppingToBeDeleted: number = action.payload;
            const newState: Array<Topping> = state.map((topping) => {
                if (toppingToBeDeleted !== topping.toppingId) {
                    return topping;
                }
            });
            return newState;

        case DELETE_TOPPINGS:
            return [];

        case INSERT_TOPPING:
            const toppingToBeInserted: Topping = action.payload;
            const newState2: Array<Topping> = [...state, toppingToBeInserted];
            return newState2;

        default:
            return state;
    }
}


