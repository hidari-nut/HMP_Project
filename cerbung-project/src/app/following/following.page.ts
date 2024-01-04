import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  current_user:any={};
  user_id: number = 0;
  cerbungs: any[] = [];

  constructor(private cerbungservice: CerbungserviceService) {
  }

  ngOnInit() {
    var current_user_string = localStorage.getItem("app_current_user")??""
    this.current_user = JSON.parse(current_user_string)

    this.cerbungservice.readFollowCerbung(this.current_user.user_id).subscribe(
      (response: any) => {
        if (response && response.data) {
          this.cerbungs = response.data;
        }
      }
    );
  }
}
