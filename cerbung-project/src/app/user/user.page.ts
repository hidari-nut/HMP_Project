import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  writers: any[] = [];
  viewType = 'mostliked';
  
  constructor(private cerbungservice: CerbungserviceService) {
   }

   ngOnInit() {
    this.cerbungservice.readUsers().subscribe(
      (response) => {
        if (response.result = 'OK') {
          console.log(response.data);
          this.writers = response.data;
        }
      }
    ); 
  }

}
