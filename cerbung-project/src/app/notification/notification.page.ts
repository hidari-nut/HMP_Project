import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  current_user: any = {};

  notifications: any[] = [];

  constructor(private cerbungservice : CerbungserviceService) { 
    // this.notifications = cerbungservice.notifications;
  }

  ngOnInit() {
    var current_user_string = localStorage.getItem("app_current_user")??""
    this.current_user = JSON.parse(current_user_string)

    this.cerbungservice.readNotifications(this.current_user.user_id).subscribe(
      (response: any) => {
        this.notifications = response.data
      }
    )
  }

}
