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
  selectGenre: string = '';
  selectGenreId: number = 0;
  currentUserId: number = 0;
  paragraph: string = ''; 
  radio: boolean = false; 
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
        this.restricted = state.restricted || "1";
        this.selectGenre = state.selectGenre || 'Default Genre';
        this.paragraph = state.paragraph || '';
        this.radio = state.radio || false;
      }
    });

    this.currentUser = localStorage.getItem("app_current_user")??''
  }

  createCerbung(){
    this.cerbungservice.createCerbung(this.cerbungTitle, this.shortDescription, this.imageCover, this.restricted, 
      this.selectGenreId, this.currentUserId, this.paragraph).subscribe(
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
