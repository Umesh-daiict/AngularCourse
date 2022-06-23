// import { IEvent } from './shared/event.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
    `
      .green {
        color: #00aa00 !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 5px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  //IEvent;

  constructor() {}

  ngOnInit() {}

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}
