import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {

  currentUser: any = {};

  cerbungTitle: string = ''; 
  shortDescription: string = '';
  imageCover: string = ''; 
  restricted: number = 1;
  selectGenre: any = {};
  selectGenreName: string = "";
  paragraph: string = ''; 
  radio: string = ""; 
  check: boolean = false;


  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const state = window.history.state;

      if (state) {
        // Replace the hardcoded text with data from create1 and create2
        this.cerbungTitle = state.cerbungTitle || 'Default Title';
        this.shortDescription = state.shortDescription || 'Default Description';
        this.imageCover = state.imageCover || 'Default Image';
        this.selectGenre = state.selectGenre || {};
        this.paragraph = state.paragraph || '';
        this.radio = state.radio || false;
      }
    });

    if(this.radio == "1"){
      this.restricted = 1
    }
    else if(this.radio == "0"){
      this.restricted = 0
    }

    // this.restricted = (this.radio === "true") ? 1: 0
    // this.restricted = this.radio

    var current_user_string = localStorage.getItem("app_current_user")??""
    this.currentUser = JSON.parse(current_user_string)
  }

  createCerbung(){
    this.cerbungservice.createCerbung(this.cerbungTitle, this.shortDescription, this.imageCover, this.restricted, 
      this.selectGenre.genre_id, this.currentUser.user_id, this.paragraph).subscribe(
      (response:any) => {
        if(response.result === "OK"){
          alert("Successfully created Cerbung")

          this.router.navigate(['/home']);
          window.history.replaceState(null, '', '/home'); //prevent back button
        }
        else{
          alert("Failed to create cerbung! please try again later.")
        }
      }
    )
  }

  isNextButtonDisabled(): boolean {
    if (this.check === false) {
      return true;
    }
    else {
      return false
    }
  }
}
