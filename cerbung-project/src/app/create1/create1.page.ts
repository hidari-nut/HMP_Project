import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-create1',
  templateUrl: './create1.page.html',
  styleUrls: ['./create1.page.scss'],
})
export class Create1Page implements OnInit {

  genres: any[] = [];

  cerbungTitle: string = '';
  shortDescription: string = '';
  imageCover: string = '';
  selectGenre: any={};
  buttonStatus: boolean = false;

  constructor(private router: Router, private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.readGenres()
  }

  readGenres(){
    this.cerbungservice.readGenres().subscribe(
      (response) => {
        if (response.result == "OK") {
          console.log(response.data);
          this.genres = response.data;
        }
      }
    );
  }

  isNextButtonDisabled(): boolean {
    if (this.cerbungTitle === ''||this.shortDescription ===''||this.imageCover ===''||this.selectGenre===''){
      return true;
    }
    else 
      return false
  }
  navigateToCreate2() {
    this.router.navigate(['/create2'], {
      state: {
        cerbungTitle: this.cerbungTitle,
        shortDescription: this.shortDescription,
        imageCover: this.imageCover,
        selectGenre: this.selectGenre,
      },
    });
}
}
