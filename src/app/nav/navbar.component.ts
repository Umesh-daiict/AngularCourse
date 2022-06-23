// import { AuthService } from './../user/auth.service';
import { Component, OnInit, Inject, forwardRef, Input } from '@angular/core';
// import { ISession, EventService } from '../events/shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  //   foundSessions: ISession[] = [];

  //   constructor( @Inject(forwardRef(() => AuthService)) public auth: AuthService,
  //                @Inject(forwardRef(() => EventService)) private eventService: EventService) {
  //   }

  ngOnInit() {}

  //   searchSessions(searchTerm) {
  //     this.eventService.searchSessions(searchTerm).subscribe(sessions => {
  //       this.foundSessions = sessions;
  //       // console.log(this.foundSessions);
  //     });
  //   }
}
