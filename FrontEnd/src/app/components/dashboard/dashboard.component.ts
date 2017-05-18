import { Component } from '@angular/core';

@Component({
    selector:'app-dashboard',

    templateUrl:'dashboard.component.html', 
    
    styleUrls:['dashboard.component.css'],
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