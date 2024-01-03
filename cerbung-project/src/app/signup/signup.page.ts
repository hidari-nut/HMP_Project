import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

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
  showTabBar: boolean = false;


  constructor(private router: Router, private cerbungservice: CerbungserviceService) {
    this.newUsername = '';
    this.profilePictureURL = '';
    this.newPassword = '';
    this.confirmPassword = '';
   }

  ngOnInit() {
  }
  onSignUp() {

    if(this.newPassword != this.confirmPassword){
      alert("Password confirmation does not match.")
    }
    else{
      this.cerbungservice.signUp(this.newUsername, this.newPassword, this.profilePictureURL).subscribe(
        (response:any) => {
          if(response.result === "OK"){
            alert("Sign up Successful")
  
            this.router.navigate(['login']);
            window.history.replaceState(null, '', '/login'); 
          }
          else{
            alert("Sign up failed! Please try again later.")
          }
        }
      )
    }
  }
}
