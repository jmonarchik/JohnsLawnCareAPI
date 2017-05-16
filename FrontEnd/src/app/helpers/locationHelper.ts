import { Location } from '../models/location';

export class LocationHelper {

    public helpMe(location: Location): string
    {
        return location.locationName;
    }
}