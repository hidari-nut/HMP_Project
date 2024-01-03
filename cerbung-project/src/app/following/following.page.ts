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
    this.genrelist = this.cerbungservice.genrelist;
    this.cerbungservice.cerbungs().subscribe(
      (data)=> {
          this.cerbungs=data;
        }  );
  }

  ngOnInit() {
  }

}
