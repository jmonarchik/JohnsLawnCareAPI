import { Component } from '@angular/core';

@Component({
    selector:'app-dashboard',

    template: `
        <div class="centerButtons">
            <button (click)="toggleVisibilityOfLocationsTable()">Locations</button>
            <button (click)="toggleVisibilityOfMenu()">Menu</button>
            <button>Admin Portal</button>
        <div *ngIf="isLocationsTableVisible">
            <app-locations-table></app-locations-table>
        </div>
        <div *ngIf="isMenuVisible">
             <app-menu></app-menu>
        </div>
        </div>
    `,
    styles:[`

    `]
})

export class DashboardComponent {}