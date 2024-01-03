import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  current_user:any={};
  cerbung_id: number = 0;
  cerbungs: any = {};
  index = 0;

  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) {
    this.current_user = localStorage.getItem("app_current_user")
  }


ngOnInit() {
  this.route.params.subscribe(
    params => {
    this.cerbung_id = params['index']; 
    this.cerbungservice.readCerbungDetail(this.current_user.user_id, this.cerbung_id).subscribe(
      (response: any) => {
        this.cerbungs = response.data
      }
    );
  });
}

getParagraphs() {
  return this.cerbungs.contributions;
}

}
