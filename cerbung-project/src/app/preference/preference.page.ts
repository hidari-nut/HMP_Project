import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage implements OnInit {
  isActiveNotif: boolean = true;
  isActiveMode: boolean = true;

  picUrl = 'https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/04/Ninomae-Inanis-Unravel-1.jpg';
  accountName = 'novella';
  oldPass = 'novella';
  newPass = 'Novella';
  rePass = 'Novella';

  constructor() { }

  ngOnInit() { }

  toggleStatusNotif() {
    this.isActiveNotif = !this.isActiveNotif;
  }
  toggleStatusMode() {
    this.isActiveMode = !this.isActiveMode;
  }
}
