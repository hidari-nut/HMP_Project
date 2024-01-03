import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  genrelist = ["Mystery", "Crime", "Action", "Comedy"];

  constructor(private http: HttpClient) { }
  cerbungs(): Observable<any> {
    return this.http.get("https://ubaya.me/native/160421069/project/read_cerbungs.php");
  }
}
