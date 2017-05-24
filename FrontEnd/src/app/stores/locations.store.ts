import { Action } from '@ngrx/store';
import { Location } from '../models/location';

//Action Types
export const
    UPDATE_LOCATIONS = "UPDATE_LOCATIONS",
    DELETE_LOCATION = "DELETE_LOCATION",
    DELETE_LOCATIONS = "DELETE_LOCATIONS",
    INSERT_LOCATION = "INSERT_LOCATION";

const locationsInitialState: Array<Location> = [];

export const locations = (state: Array<Location> = locationsInitialState, action: Action) => {
    switch (action.type) {
        case UPDATE_LOCATIONS:
            return action.payload;

        case DELETE_LOCATION:
            const locationIdToBeDeleted: number = action.payload;
            const newState: Array<Location> = state.map((location) => {
                if (locationIdToBeDeleted !== location.locationId) {
                    return location;
                }
            });
            return newState;

        case DELETE_LOCATIONS:
            return [];
        
        case INSERT_LOCATION:
            const locationToBeInserted: Location = action.payload;
            const newState2: Array<Location> = [...state,locationToBeInserted];
            return newState2;

        default:
            return state;
    }
}