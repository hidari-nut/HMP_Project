import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritersService {
  accounts = [{
    accountName : 'novella',
    password : 'novella'
  }]
  constructor() { }
}
