import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  genrelist: any[] = [];

  cerbungs: any[] = [];

  constructor(private cerbungservice: CerbungserviceService) {
    //this.genrelist = this.cerbungservice.genrelist;
    //this.cerbungs = this.cerbungservice.cerbungs;
  }

  ionViewWillEnter() {
    this.ngOnInit()
  }

  ngOnInit() {
    this.cerbungservice.readCerbungs().subscribe(
      (response) => {
        if (response) {
          console.log(response.data);
          this.cerbungs = response.data;
        }
      }
    ); 
    this.cerbungservice.readGenres().subscribe(
      (response) => {
        if (response && response.data) {
          console.log(response.data);
          this.genrelist = response.data;
        }
      }
    );
    
  }
  

}
