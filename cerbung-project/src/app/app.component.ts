import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showTabBar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (window.location.href.startsWith('http://localhost:') && window.location.pathname != '/home') {
      this.showTabBar = false;
    } else if (window.location.pathname === '/signup' ||  window.location.pathname === '/login') {
      this.showTabBar = false;
    } else {
      this.showTabBar = true;
    }
  }
}
