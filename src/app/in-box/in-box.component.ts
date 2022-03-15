import { Component, OnInit,Input } from '@angular/core';
import { Inbox } from '../services/data.service';
@Component({
  selector: 'app-in-box',
  templateUrl: './in-box.component.html',
  styleUrls: ['./in-box.component.scss'],
})
export class InBoxComponent implements OnInit {
  @Input() inBoxObj: Inbox ;
  constructor() { }

  ngOnInit() {}

}
