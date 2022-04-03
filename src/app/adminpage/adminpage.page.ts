import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {

  constructor(private data: DataService,private router: Router) { }

  ngOnInit() {
  }
  getSections(){
    console.warn(this.data.getMessages());
    return this.data.getMessages();
  }
  logout(){
    localStorage.removeItem('usertoken');
    localStorage.removeItem('is_admin');

   this. router.navigate(['login']);
  }
}
