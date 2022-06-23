import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <!-- <event-list></event-list> -->
  `,
})
export class AppComponent {
  title = 'angular-fundamentals';
}
