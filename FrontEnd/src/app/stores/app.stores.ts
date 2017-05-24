import { Store, StoreModule } from '@ngrx/store';
import { locations } from './locations.store';

export const APP_STORES = [
    StoreModule.provideStore({
        locations,
    }),   
];