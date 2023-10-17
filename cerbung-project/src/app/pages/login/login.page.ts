import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from "e:/Download/College/Hybrid Mobile Programming/HMP_Project/cerbung-project/src/app/cerbungservice.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string;
  password: string;
  showTabBar: boolean = false;
  
  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService, private router: Router, private toastController: ToastController) {

    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  async onLogin() {
    const validAccount =
      this.cerbungservice.accounts.find(account => account.accountName === this.username && account.password === this.password);

    if (validAccount) {
      this.router.navigate(['/home']);
    } else {
      const toast = await this.toastController.create({
        message: 'Invalid username or password',
        duration: 3000, 
        position: 'bottom', 
        color: 'danger', 
      });
      toast.present();
    }
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
