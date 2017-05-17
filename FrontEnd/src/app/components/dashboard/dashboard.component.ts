import { Component } from '@angular/core';

@Component({
    selector:'app-dashboard',

    template: `
        <div class="centerButtons">
            <button (click)="toggleVisibilityOfLocations()">Locations</button>
            <button (click)="toggleVisibilityOfMenu()">Menu</button>
            <button>Admin Portal</button>
        <div *ngIf="isLocationsVisible">
            <app-locations></app-locations>
        </div>
        <div *ngIf="isMenuVisible">
             <app-menu></app-menu>
        </div>
        </div>
    `,
    styles:[`

    `]
})

export class DashboardComponent {
    title: string = 'app works!';
  isLocationsVisible: boolean = false;
  isMenuVisible: boolean = false;

  private toggleVisibilityOfLocations(): void
  {
     this.isLocationsVisible = !this.isLocationsVisible;
     //(this.isLocationsTableVisible = true) ? "isMenuVisible = false":"";
  }

  private toggleVisibilityOfMenu(): void
  {
    this.isMenuVisible = !this.isMenuVisible;
    //(this.isMenuVisible = true) ? "isLocationsTableVisible = false":"";
  }
  
}