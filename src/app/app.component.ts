import { Component } from '@angular/core';
import { routerTransition } from './app.router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {
  title = 'DC Proyect';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
