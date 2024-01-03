import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { WritersService } from '../writers.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  writers: any[] = [];
  viewType = 'mostliked';
  constructor(private writerService: WritersService) {
    this.writers = writerService.accounts;
   }

  ngOnInit() {
  }

}
