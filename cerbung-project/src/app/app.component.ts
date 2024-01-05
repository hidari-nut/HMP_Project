import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showTabBar: boolean = false;
  eligiblePages: { path: string; title: string }[] = [
    { path: '/home', title: 'Cerbung' },
    { path: '/read', title: 'Read' },
    { path: '/create1', title: 'Create Cerbung' },
    { path: '/create2', title: 'Create Cerbung' },
    { path: '/create3', title: 'Create Cerbung' },
    { path: '/following', title: 'Followed Cerbungs' },
    { path: '/user', title: 'Users' },
    { path: '/accountview', title: 'Account Details' },
    { path: '/notification', title: 'Notifications' },
    { path: '/approvals', title: 'Approval Page' },
    { path: '/preference', title: 'Preferences' },

  ];
  pageTitle: string = ''; 

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;
        const currentPage = this.eligiblePages.find(
          (page) => page.path === currentRoute
        );
        this.pageTitle = currentPage ? currentPage.title : 'Cerbung';
        this.showTabBar = this.eligiblePages.map(page => page.path).includes(currentRoute);
      }
    });
  }

  ngOnInit() {}
}

