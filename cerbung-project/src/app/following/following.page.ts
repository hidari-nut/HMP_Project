import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  genrelist: any[] = [];

  cerbungs: any[] = [];

  constructor(private cerbungservice: CerbungserviceService) {
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
