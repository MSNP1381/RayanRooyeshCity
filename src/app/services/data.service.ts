import { Injectable } from '@angular/core';

export interface Inbox {
  title: string;
  id: number;
}
export interface User{
  username: string;
  password: string;
}
export interface Sections {
  name: string;
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  public getInboxes(id: number): Inbox[] {
    return [
      { title: 'اتللو', id: 12 },
      { title: 'پنتاگو', id: 12 },
    ];
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
  public userAtheticatioon(data: User){

  }
}
