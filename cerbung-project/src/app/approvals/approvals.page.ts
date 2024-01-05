import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
export class ApprovalsPage implements OnInit {

  current_user: any = {};
  notification_id: number = 0;
  notification: any = {};

  notification_user: any = {};
  notification_cerbung: any = {};

  constructor(private cerbungservice: CerbungserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var current_user_string = localStorage.getItem("app_current_user") ?? ""
    this.current_user = JSON.parse(current_user_string)

    this.route.params.subscribe(
      params => {
        this.notification_id = params['index'];
        this.cerbungservice.readNotificationsById(this.notification_id).subscribe(
          (response: any) => {
            this.notification = response.data
            this.cerbungservice.readUser(this.notification.notification_user_id).subscribe(
              (response_user: any) => {
                this.notification_user = response_user.data
              }
            )
            this.cerbungservice.readCerbungById(this.notification.notification_cerbung_id).subscribe(
              (response_cerbung: any) => {
                this.notification_cerbung = response_cerbung.data

              }
            )

          }
        )
      }
    )


  }

  updateNotification(p_type_id: number) {
    this.cerbungservice.updateNotification(
      this.notification.notification_id, p_type_id).subscribe(
        (response: any) => {
          if (response.result === 'OK') {
            if (p_type_id == 2) {
              this.cerbungservice.createUserPermission(this.notification.notification_user_id, 
                this.notification.notification_cerbung_id).subscribe(
                  (response_approval: any) =>{
                    if(response_approval === "OK"){
                        alert("Successfully approved!")
                        this.router.navigate(['/home']);
                        window.history.replaceState(null, '', '/home');
                    }
                    else{
                      alert(response.message + ": APPROVAL FAIL")
                    }
                  }
                )
            }
            else{
              alert("Successfully denied!")
              this.router.navigate(['/home']);
              window.history.replaceState(null, '', '/home');
            }

          }
          else {
            alert(response.message)
          }
        });
  }

}
