import { Component } from '@angular/core';

@Component({
    selector: 'app-locations',

    templateUrl: 'locations.component.html',

    styles:[`
    
    `],
})
export class LocationsComponent {
    locationName: string;
    locationStreet: string;
    locationCity: string;
    locationState: string;
    locationZip: string;
}