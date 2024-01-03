import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritersService {
  accounts = [{
    pic_url : "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/04/Ninomae-Inanis-Unravel-1.jpg",
    accountName : 'novella',
    password : 'novella',
    created_year : '2021',
    latest_post : '09/09/2021',
    total_like : 150
  },
  {
    pic_url : "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/04/Ninomae-Inanis-Unravel-1.jpg",
    accountName : 'fauna',
    password : 'fauna',
    created_year : '2022',
    latest_post : '01/01/2022',
    total_like : 180
  }]
  constructor() { }
}
