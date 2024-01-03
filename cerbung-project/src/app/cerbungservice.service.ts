import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  genrelist = ["Mystery", "Crime", "Action", "Comedy"];
  
  notifications = [
    {
      notification_id: 1,
      notification_receiver_id: 101,
      notification_user_id: 201,
      notification_type_id: 1,
      notification_cerbung_id: 301,
      notification_date_send: '2024-01-03'
    },
    {
      notification_id: 2,
      notification_receiver_id: 102,
      notification_user_id: 202,
      notification_type_id: 2,
      notification_cerbung_id: 302,
      notification_date_send: '2024-01-02'
    },
    {
      notification_id: 3,
      notification_receiver_id: 103,
      notification_user_id: 203,
      notification_type_id: 3,
      notification_cerbung_id: 303,
      notification_date_send: '2024-01-01'
    },
    {
      notification_id: 4,
      notification_receiver_id: 104,
      notification_user_id: 204,
      notification_type_id: 1,
      notification_cerbung_id: 304,
      notification_date_send: '2024-01-04'
    },
    {
      notification_id: 5,
      notification_receiver_id: 105,
      notification_user_id: 205,
      notification_type_id: 2,
      notification_cerbung_id: 305,
      notification_date_send: '2024-01-05'
    }
  ];
  


  constructor(private http: HttpClient) { }
  readCerbungs(): Observable<any> {
    return this.http.get("https://ubaya.me/native/160421069/project/read_cerbungs.php");
  }
}
