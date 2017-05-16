import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template:`
  <div>
    <router-outlet></router-outlet>
  </div>
  `,

  styles:[`
    .crazy{
      background-color: orange;
    } 
    .centerButtons{
      text-align: center;
    }
  `],
})
export class AppComponent {
  title: string = 'app works!';
  isLocationsTableVisible: boolean = false;
  isMenuVisible: boolean = false;

  private toggleVisibilityOfLocationsTable(): void
  {
     this.isLocationsTableVisible = !this.isLocationsTableVisible;
     //(this.isLocationsTableVisible = true) ? "isMenuVisible = false":"";
  }

  private toggleVisibilityOfMenu(): void
  {
    this.isMenuVisible = !this.isMenuVisible;
    //(this.isMenuVisible = true) ? "isLocationsTableVisible = false":"";
  }
  
}
