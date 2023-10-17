import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WritersService } from 'src/app/writers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string;
  password: string;
  showTabBar: boolean = false;
  
  constructor(private route: ActivatedRoute, private writersservice: WritersService ,private router: Router, private toastController: ToastController) {

    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  async onLogin() {
    const validAccount =
      this.writersservice.accounts.find(account => account.accountName === this.username && account.password === this.password);

    if (validAccount) {
      this.router.navigate(['/home']);
      window.history.replaceState(null, '', '/home'); //prevent back button

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
    window.history.replaceState(null, '', '/signup'); 
  }
}
