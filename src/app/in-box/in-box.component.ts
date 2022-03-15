import { Component, OnInit,Input } from '@angular/core';
import { Inbox } from '../services/data.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-in-box',
  templateUrl: './in-box.component.html',
  styleUrls: ['./in-box.component.scss'],
})
export class InBoxComponent implements OnInit {
  @Input() inBoxObj: Inbox ;
  constructor(public toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'ثبت شد',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {}

}
