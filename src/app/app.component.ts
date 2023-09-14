import { Component, NgZone } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handicraft';
  showHead: boolean = false;

  constructor (private zone: NgZone, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.showHead= true;
        } else {
          this.showHead= false;
        }
      }
    });
  }
 }