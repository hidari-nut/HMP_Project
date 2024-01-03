import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CerbungserviceService } from '../../cerbungservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string;
  password: string;
  showTabBar: boolean = false;
  currentUser: any;
  
  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService,
    private router: Router, private toastController: ToastController) {

    this.username = '';
    this.password = '';

    this.currentUser = "";
  }

  ngOnInit() {
  }

  async onLogin() {

    this.cerbungservice.login(this.username, this.password).subscribe(
      (response:any) => {
        if(response.result === "Success"){
          alert("Login Successful")
          this.currentUser = response.data

          //Store user in local Storage
          localStorage.setItem("app_current_user", JSON.stringify(this.currentUser))
          // localStorage.setItem("app_current_user_id", this.currentUser.user_id)

          this.router.navigate(['/home']);
          window.history.replaceState(null, '', '/home'); //prevent back button
        }
        else{
          alert("Login failed! Please ensure that your username and password is correct.")
        }
      }
    )

    // const validAccount =
    //   this.writersservice.accounts.find(account => account.accountName === this.username && account.password === this.password);

    // if (validAccount) {
    //   this.router.navigate(['/home']);
    //   window.history.replaceState(null, '', '/home'); //prevent back button

    // } else {
    //   const toast = await this.toastController.create({
    //     message: 'Invalid username or password',
    //     duration: 3000, 
    //     position: 'bottom', 
    //     color: 'danger', 
    //   });
    //   toast.present();
    // }
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
    window.history.replaceState(null, '', '/signup'); 
  }
}
