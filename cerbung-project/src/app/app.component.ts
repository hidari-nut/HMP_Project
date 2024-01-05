import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showTabBar: boolean = false;
  eligiblePages: string[] = ['/home', '/read', '/create1', '/create2', '/create3', '/following', '/preference', '/user', '/accountview', '/notification', '/approvals'];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        this.showTabBar = this.eligiblePages.includes(currentRoute);
      }
    });
  }
  
  ngOnInit() {  }
}
