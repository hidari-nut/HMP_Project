import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  newUsername: string;
  profilePictureURL: string;
  newPassword: string;
  confirmPassword: string;

  constructor(private router: Router) {
    this.newUsername = '';
    this.profilePictureURL = '';
    this.newPassword = '';
    this.confirmPassword = '';
   }

  ngOnInit() {
  }
  onSignUp() {
    this.router.navigate(['']);
  }
}
