import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accountview',
  templateUrl: './accountview.page.html',
  styleUrls: ['./accountview.page.scss'],
})

export class AccountviewPage implements OnInit {

  current_user: any = {};

  user_id: number = 0;
  users: any = {};
  index = 0;
  cerbungs: any[] = [];

  

  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) {
  }

  ngOnInit() {

    var current_user_string = localStorage.getItem("app_current_user")??""
    this.current_user = JSON.parse(current_user_string)

    this.route.params.subscribe(
      params => {
        this.user_id = params['index'];
        this.cerbungservice.readUser(this.user_id).subscribe(
          (response: any) => {
            this.users = response.data
          }
        )
      }
    )

    this.route.params.subscribe(
      params => {
        this.user_id = params['index'];
        this.cerbungservice.readCerbungByUser(this.user_id).subscribe(
          (response:any) => {
            if (response.result=='OK') {
              this.cerbungs = response.data;
            }
          }
        );
      }
    )
  }
}
