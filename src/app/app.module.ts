import { NgModule, ɵɵpureFunction1 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/error/error.component';
import { appRoutes } from 'src/app/routes';
import { AppComponent } from './app.component';
import { ToastrSevice } from './common/toastr.service';
import { NavbarComponent } from './nav/navbar.component';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  EventsListComponent,
  EventService,
  EventThumbnailComponent,
} from './events/index';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],

  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],

  providers: [
    EventService,
    ToastrSevice,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canLeaveCreateEvent', useValue: function1 },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function function1(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Do you Want to Leave Without Saving Form ?');
  }
  return true;
}
