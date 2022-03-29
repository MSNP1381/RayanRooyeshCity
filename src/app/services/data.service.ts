import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inbox {
  title: string;
  id: number;
  enter_amount: number;
  win_amount: number;
  is_two: boolean;
}

export interface User {
  username: string;
  password: string;
}

export interface Sections {
  name: string;
  id: number;
}
export interface Transaction {
  actionId: number;
  withdrawAmount: number;
  team_id: number;
}
export interface Transactions {
  id: number;
  actionId: number;
  team_id: number;
  withdrawAmount: number;
}
export interface Message {
  name: string;
  link: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://msnp1.pythonanywhere.com/';
  //  baseUrl = 'http://127.0.0.1:8000/';
  public messages: Message[] = [
    { name: 'رنکینگ', link: '/ranking/' },
    { name: 'لیست تراکنش های کلی', link: '/total-transactions' },
    { name: 'لیست تراکنش ها به تفکیک تیم', link: '/team-transactions' },
  ];

  constructor(private http: HttpClient) {}

  public getInboxes(id: number): Observable<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Accept": "*/*",
    //     "Content-Type" :  'application/json',
    //     "Authorization" : 'Basic ' + btoa('msnp1:123456amn')
    //   })
    // };
    return this.http.get<Inbox[]>(this.baseUrl + 'Sections/' + id);
  }

  public getSections(): Sections[] {
    return [
      { name: 'اتللو و پنتاگو', id: 1 },
      { name: 'بزنگاه و دکتر اکتشاف', id: 2 },
      { name: 'هگز و دوز', id: 3 },
      { name: 'کاردستی', id: 4 },
      { name: 'سوالات ساده و متوسط', id: 5 },
      { name: 'سوالات سخت و طلایی', id: 6 },
      { name: 'تانگو و اریگامی', id: 7 },
      { name: 'گیم', id: 8 },
    ];
  }

  public userAuthentication(data: User) {
    console.log(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('usertoken'),
      }),
    };
    return this.http.post<any>(this.baseUrl + 'api-auth/login/', httpOptions);
  }
  public submitGame(data: Transaction): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('usertoken'),
      }),
    };
    return this.http.post<any>(
      this.baseUrl + 'transactions/',
      data,
      httpOptions
    );
  }
  public login(user: User): Observable<any> {
    return this.http.post(this.baseUrl + 'token/', user);
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
  public getRanking(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('usertoken'),
      }),
    };

    return this.http.get(this.baseUrl + 'rank', httpOptions);
  }

  public getTotalTransactions(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('usertoken'),
      }),
    };

    return this.http.get(this.baseUrl + 'transactions/', httpOptions);
  }
  public getTeamlTransactions(team_id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:'Bearer ' + localStorage.getItem('usertoken'),
      }),
    };

    return this.http.get(this.baseUrl + 'transactions/' + team_id, httpOptions);
  }
  public is_admin(user: User): Observable<any>{
    return this.http.post(this.baseUrl+'is_admin/',user);
  }
}
