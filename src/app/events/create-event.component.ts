import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';
// import { EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['events']);
  }
}
