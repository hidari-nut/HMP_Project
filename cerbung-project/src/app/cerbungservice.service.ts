import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  // genrelist = ["Mystery", "Crime", "Action", "Comedy"];
  
  notifications = [
    {
      notification_id: 1,
      notification_receiver_id: 101,
      notification_user_id: 'Novela',
      notification_type_id: 1,
      notification_cerbung_id: 301,
      notification_date_send: '2024-01-03'
    },
    {
      notification_id: 2,
      notification_receiver_id: 102,
      notification_user_id: 'Fauna',
      notification_type_id: 2,
      notification_cerbung_id: 302,
      notification_date_send: '2024-01-02'
    },
    {
      notification_id: 3,
      notification_receiver_id: 103,
      notification_user_id: 'Noel',
      notification_type_id: 3,
      notification_cerbung_id: 303,
      notification_date_send: '2024-01-01'
    },
    {
      notification_id: 4,
      notification_receiver_id: 104,
      notification_user_id: 'Mori',
      notification_type_id: 1,
      notification_cerbung_id: 304,
      notification_date_send: '2024-01-04'
    },
    {
      notification_id: 5,
      notification_receiver_id: 105,
      notification_user_id: 'Chloe',
      notification_type_id: 2,
      notification_cerbung_id: 305,
      notification_date_send: '2024-01-05'
    }
  ];
  

  constructor(private http: HttpClient) { }
  readGenres(): Observable<any> {
    return this.http.get("https://ubaya.me/native/160421069/project/read_genres.php");
  }
  readCerbungs(): Observable<any> {
    return this.http.get("https://ubaya.me/native/160421069/project/read_cerbungs.php");
  }
  readCerbungDetail(p_user_id:number, p_cerbung_id:number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('user_id', p_user_id.toString()); 
    body.set('cerbung_id', p_cerbung_id.toString());
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/native/160421069/project/read_cerbung_detail.php", urlEncodedData, { headers });
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
