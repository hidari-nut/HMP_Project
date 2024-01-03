import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications: any[] = [];

  constructor(cerbungService : CerbungserviceService) { 
    this.notifications = cerbungService.notifications;
  }

  ngOnInit() {
  }

}
