import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';

import { AppComponent } from './app.component';
import { ToastrSevice } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
  ],

  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],

  providers: [EventService, ToastrSevice],
  bootstrap: [AppComponent],
})
export class AppModule {}
