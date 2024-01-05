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

          if(this.cerbungs.cerbung_restricted === 1 
            && this.cerbungs.user_add_permission === 0 
            && this.current_user == this.cerbungs.user_username){
            this.isRestricted = true
          }
          else{
            this.isRestricted = false
          }
        }
      )
    }
  )
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

        //Refresh
        this.ngOnInit()
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

updateLikeCerbung(p_current_like_status: number){
  var p_likes: number = p_current_like_status === 1 ? 0:1

  this.cerbungservice.updateLikeCerbung(p_likes, this.current_user.user_id, this.cerbung_id)
  .subscribe(
    (response:any) =>{
      if(response.result === "OK"){
        if(p_likes == 1){
          alert("You liked this cerbung!")
        }
        else{
          alert("You unliked this cerbung!")
        }


        this.ngOnInit()
      }
      else{
        alert("Failed to like this cerbung. Please try again")
      }
    }
  )
}

updateFollowCerbung(p_current_follow_status: number){
  var p_follows: number = p_current_follow_status === 1 ? 0:1

  this.cerbungservice.updateFollowCerbung(p_follows, this.current_user.user_id, this.cerbung_id)
  .subscribe(
    (response:any) =>{
      if(response.result === "OK"){
        if(p_follows == 1){
          alert("You follow this cerbung!")
        }
        else{
          alert("You unfollowed this cerbung!")
        }


        this.cerbungs.user_follow_cerbung = p_follows
      }
      else{
        alert("Failed to follow this cerbung. Please try again")
      }
    }
  )
}

updateLikeContribution(p_current_like_status: number, p_contribution_id: number){
  var p_likes: number = p_current_like_status === 1 ? 0:1

  this.cerbungservice.updateLikeContribution(p_likes, this.current_user.user_id, p_contribution_id)
  .subscribe(
    (response:any) =>{
      if(response.result === "OK"){
        if(p_likes == 1){
          alert("You liked this paragraph!")
        }
        else{
          alert("You unliked this paragraph!")
        }


        this.ngOnInit()
      }
      else{
        alert("Failed to like this cerbung. Please try again")
      }
    }
  )
}

customCounterFormatter(inputLength: number, maxLength: number) {
  return `${inputLength} of ${maxLength}`;
}

}
