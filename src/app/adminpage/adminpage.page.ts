import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }
  getSections(){
    console.warn(this.data.getMessages());
    return this.data.getMessages();
  }
}
