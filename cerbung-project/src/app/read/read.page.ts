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
  user_id: number = 0;
  cerbung_id: number = 0;
  cerbungs: any = {};
  index = 0;

  new_paragraph: string = "";
  isRestricted: boolean = true;

  contributionButtonText: string = "Request to Contribute";

  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) {
  
  }


ngOnInit() {

  // this.user_id = parseInt(localStorage.getItem("app_current_user_id")??"")
  var current_user_string = localStorage.getItem("app_current_user")??""
  this.current_user = JSON.parse(current_user_string)

  this.route.params.subscribe(
    params => {
      this.cerbung_id = params['index']; 
      this.cerbungservice.readCerbungDetail(this.current_user.user_id, this.cerbung_id).subscribe(
        (response: any) => {
          this.cerbungs = response.data
        }
      )
    }
  )

  if(!this.isRestricted){
    this.contributionButtonText = "Submit Contribution"
  }

  // this.route.params.subscribe(
  //   params => {
  //     this.cerbung_id = params['index']
  //     this.cerbungservice.readCerbungDetail(this.current_user.user_id, this.cerbung_id).subscribe(
  //       (response: any) => {
  //         this.cerbungs = response.data
  //       }
  //     )
  //   }
  // )
}

getParagraphs() {
  return this.cerbungs.contributions;
}

customCounterFormatter(inputLength: number, maxLength: number) {
  return `${inputLength} of ${maxLength}`;
}

}
