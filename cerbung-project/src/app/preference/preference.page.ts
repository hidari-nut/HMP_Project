import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage implements OnInit {
  isActiveNotif: boolean = true;
  isActiveMode: boolean = true;

  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) { }

  e_user_id: number = 0
  e_user_username = '';
  e_user_old_password = '';
  e_user_new_password = '';
  e_user_re_password = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.e_user_id = params['index'];
      this.cerbungservice.readUser(params['index']).subscribe(
        (response: any) => {
          if (response && response.data) {
            this.e_user_username = response.user_username;
          }
        }
      );
    });
  }

  updateUsername() {
    this.cerbungservice.updateUser(
      this.e_user_id, this.e_user_username).subscribe(
        (response: any) => {
          if (response.result === 'success') {
            alert("success")
          }
          else {
            alert(response.message)
          }
        });
  }



  toggleStatusNotif() {
    this.isActiveNotif = !this.isActiveNotif;
  }
  toggleStatusMode() {
    this.isActiveMode = !this.isActiveMode;
  }
}
