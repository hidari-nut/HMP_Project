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

  current_user:any={};

  e_user_id: number = 0
  e_user_username = '';
  e_user_old_password = '';
  e_user_new_password = '';
  e_user_re_password = '';


  ngOnInit() {

    var current_user_string = localStorage.getItem("app_current_user")??""
    this.current_user = JSON.parse(current_user_string)

    

    this.route.params.subscribe(params => {
      this.cerbungservice.readUser(this.current_user.user_id).subscribe(
        (response: any) => {
          if (response.result == "OK") {
            this.current_user = response.data;
          }
           this.e_user_username = this.current_user.user_username
        }
      );
    });
   
  }

  updateUsername() {
    this.cerbungservice.updateUser(
      this.current_user.user_id, this.e_user_username, this.current_user.user_profile_picture).subscribe(
        (response: any) => {
          if (response.result === 'OK') {
            alert("Successfully updated username!")
          }
          else {
            alert(response.message)
          }
        });

    this.ngOnInit();
  }

  updatePassword() {
    this.cerbungservice.updatePassword(
      this.current_user.user_id, this.e_user_old_password, this.e_user_new_password).subscribe(
        (response: any) => {
          if (response.result === 'OK') {
            alert("Successfully changed password!")
          }
          else {
            alert(response.message)
          }
        });

    this.ngOnInit();
  }



  toggleStatusNotif() {
    this.isActiveNotif = !this.isActiveNotif;
  }
  toggleStatusMode() {
    this.isActiveMode = !this.isActiveMode;
  }
}
