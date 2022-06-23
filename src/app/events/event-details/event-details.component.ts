import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class EventDetailsComponent {
  event: any;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.event = this.eventService.getEventById(
      +this.route.snapshot.params['id']
    );
  }
}
