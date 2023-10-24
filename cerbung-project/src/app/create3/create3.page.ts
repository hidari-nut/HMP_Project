import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {
  cerbungTitle: string = ''; 
  shortDescription: string = '';
  imageCover: string = ''; 
  selectGenre: string = ''; 
  paragraph: string = ''; 
  radio: boolean = false; 
  check: boolean = false;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const state = window.history.state;

      if (state) {
        // Replace the hardcoded text with data from create1 and create2
        this.cerbungTitle = state.cerbungTitle || 'Default Title';
        this.shortDescription = state.shortDescription || 'Default Description';
        this.imageCover = state.imageCover || 'Default Image';
        this.selectGenre = state.selectGenre || 'Default Genre';
        this.paragraph = state.paragraph || '';
        this.radio = state.radio || false;
      }
    });
  }
  isNextButtonDisabled(): boolean {
    if (this.check === false) {
      return true;
    }
    else {
      return false
    }
  }
}
