import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.page.html',
  styleUrls: ['./create2.page.scss'],
})
export class Create2Page implements OnInit {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${inputLength} of ${maxLength}`;
  }

  constructor() { }
  paragraph: string = "";
  radio: boolean = false;
  ngOnInit() {
  }

  isNextButtonDisabled(): boolean {
    if (this.paragraph === '' || this.radio === false) {
      return true;
    }
    else
      return false
  }
}
