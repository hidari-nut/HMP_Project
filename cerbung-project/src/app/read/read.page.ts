import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  cerbungs: any[] = [];
  index = 0;

  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.cerbungservice.cerbungs().subscribe(
      (data)=> {
          this.cerbungs=data;
        }  );
  }

  getParagraphs() {
    return this.cerbungs[this.index].paragraphs;
  }

}
