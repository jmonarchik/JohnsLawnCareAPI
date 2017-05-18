export class Location {
    public locationName: string;
    public locationStreet: string;
    public locationCity: string;
    public locationState: string;
    public locationZip: string;
    public locationImagePath: string;

    constructor(locationName: string, locationStreet: string, locationCity: string, locationState: string,
    locationZip: string, locationImagePath: string)
    {
        this.locationName = locationName;
        this.locationStreet = locationStreet;
        this.locationCity = locationCity;
        this.locationState = locationState;
        this.locationZip = locationZip;
        this.locationImagePath = locationImagePath;
    }
}