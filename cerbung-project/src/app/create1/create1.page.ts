import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create1',
  templateUrl: './create1.page.html',
  styleUrls: ['./create1.page.scss'],
})
export class Create1Page implements OnInit {

  cerbungTitle: string = '';
  shortDescription: string = '';
  imageCover: string = '';
  selectGenre: string='';
  buttonStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isNextButtonDisabled(): boolean {
    if (this.cerbungTitle === ''||this.shortDescription ===''||this.imageCover ===''||this.selectGenre===''){
      return true;
    }
    else 
      return false
  }

}
