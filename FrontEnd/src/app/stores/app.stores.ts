import { Store, StoreModule } from '@ngrx/store';
import { locations } from './locations.store';
import { toppings } from './toppings.store';

export const APP_STORES = [
    StoreModule.provideStore({
        locations,
        toppings,
    }),
];