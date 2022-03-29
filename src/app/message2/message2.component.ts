import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../services/data.service';
@Component({
  selector: 'app-message2',
  templateUrl: './message2.component.html',
  styleUrls: ['./message2.component.scss'],
})
export class Message2Component implements OnInit {
  @Input() message: Message;
  constructor() { }

  ngOnInit() {}

}
