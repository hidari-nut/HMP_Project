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
    this.genrelist = this.cerbungservice.genrelist;
    //this.cerbungs = this.cerbungservice.cerbungs;
  }

  ngOnInit() {
    this.cerbungservice.cerbungs().subscribe(
      (response) => {
        if (response && response.data) {
          console.log(response.data);
          this.cerbungs = response.data;
        }
      }
    );
  }
  

}
