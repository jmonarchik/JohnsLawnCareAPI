import { Action } from '@ngrx/store';
import { PizzaSize } from '../models/pizzaSize';

//Action Types
export const
    UPDATE_PIZZA_SIZE = "UPDATE_PIZZA_SIZE",
    DELETE_PIZZA_SIZE = "DELETE_PIZZA_SIZE",
    DELETE_PIZZA_SIZES = "DELETE_PIZZA_SIZES",
    INSERT_PIZZA_SIZE = "INSERT_PIZZA_SIZE";

const pizzaSizeInitialState: Array<PizzaSize> = [];

export const pizzaSize = (state: Array<PizzaSize> = pizzaSizeInitialState, action: Action) => {
    switch (action.type) {
        case UPDATE_PIZZA_SIZE:
            return action.payload;

        case DELETE_PIZZA_SIZE:
            const pizzaSizeToBeDeleted: number = action.payload;
            const newState: Array<PizzaSize> = state.map((pizzaSize) => {
                if (pizzaSizeToBeDeleted !== pizzaSize.pizzaSizeId) {
                    return pizzaSize;
                }
            });
            return newState;

        case DELETE_PIZZA_SIZES:
            return [];

        case INSERT_PIZZA_SIZE:
            const pizzaSizeToBeInserted: PizzaSize = action.payload;
            const newState2: Array<PizzaSize> = [...state, pizzaSizeToBeInserted];
            return newState2;

        default:
            return state;
    }
}

