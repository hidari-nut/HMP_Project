import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritersService {
  accounts = [{
    accountName : 'Novella',
    password : '1234'
  }]
  constructor() { }
}
