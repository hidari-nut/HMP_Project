import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {
check: boolean = false;
  constructor() { }

  ngOnInit() {
  }
isNextButtonDisabled(): boolean{
  if(this.check === false){
    return true;
  }
  else{
    return false
  }
}
}
