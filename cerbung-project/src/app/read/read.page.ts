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
  isCerbungRestricted: boolean = true;

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

          if(this.cerbungs.cerbung_restricted === 1){
            this.isCerbungRestricted = true
          }
          else{
            this.isCerbungRestricted = false
          }

          if(this.cerbungs.cerbung_restricted === 1 && this.cerbungs.user_add_permission === 0){
            this.isRestricted = true
          }
          else{
            this.isRestricted = false
          }
        }
      )
    }
  )


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

createCerbungContribution(){
  this.cerbungservice.createCerbungContribution(this.new_paragraph, this.current_user.user_id, this.cerbung_id)
  .subscribe(
    (response:any) =>{
      if(response.result === "OK"){
        alert("Successfully submitted Contribution!")

        this.ngOnInit()
        //Refresh?
      }
      else{
        alert("Failed to submit contribution!. Please try again later.")
      }
    }
  )
}

createPermissionRequest(){
  //Request
}

customCounterFormatter(inputLength: number, maxLength: number) {
  return `${inputLength} of ${maxLength}`;
}

}
