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
  
}
