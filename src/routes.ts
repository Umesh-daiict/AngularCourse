import { Routes } from '@angular/router';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListComponent } from './app/events/event-list.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
