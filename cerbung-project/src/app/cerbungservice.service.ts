import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  login(p_username: string, p_password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username); 
    body.set('password', p_password);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/native/160421069/project/login.php", urlEncodedData, { headers });
  }

  signUp(p_username: string, p_password: string, p_profile_picture_url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username); 
    body.set('password', p_password);
    body.set('profile_picture', p_profile_picture_url);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/native/160421069/project/create_user.php", urlEncodedData, { headers });
  }
}
