export class Location {
    public locationName: string;
    public locationStreet: string;
    public locationState: string;
    public locationZip: string;

    constructor(locationName: string,locationStreet: string,locationState: string,locationZip: string)
    {
        this.locationName = locationName;
        this.locationStreet = locationStreet;
        this.locationState = locationState;
        this.locationZip = locationZip;
    }
}