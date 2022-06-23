import { Component } from '@angular/core';
import { ToastrSevice } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  template: `<div>
    <h1>See Anguler Events Live !!!</h1>
    <hr />
    <div class="row">
      <event-thumbnail
        *ngFor="let event of events"
        (click)="tellName(event.name)"
        [event]="event"
        class="col-md-5"
      ></event-thumbnail>
    </div>
  </div>`,
  styles: [
    `
      .header {
        margin: auto;
      }
    `,
  ],
})
export class EventsListComponent {
  events: any[] | undefined;
  constructor(
    private eventService: EventService,
    private toastrService: ToastrSevice
  ) {}
  ngOnInit() {
    this.events = this.eventService.getEvent();
  }
  tellName(data: any) {
    this.toastrService.Success(data);
  }
}
