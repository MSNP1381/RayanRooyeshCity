import { Component, OnInit,Input } from '@angular/core';
import { Inbox,DataService,Transaction } from '../services/data.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-in-box',
  templateUrl: './in-box.component.html',
  styleUrls: ['./in-box.component.scss'],
})
export class InBoxComponent implements OnInit {
  @Input() inBoxObj: Inbox ;
  constructor(private toastController : ToastController,private dataService : DataService) { }
  number1:number;
  number2:number;
  winner:number;
  ngOnInit() {
    
  }
  submitEnterance(){
    var data:Transaction={
      withdrawAmount:this.inBoxObj.enter_amount,
      actionId:this.inBoxObj.id,
      team_id:this.number1,
    }


    this.dataService.submitGame(data).subscribe(data => {
      if(this.inBoxObj.is_two)
        {
          data.team_id=this.number2;
          this.dataService.submitGame(data).subscribe(data2 => this.presentToast('ثبت شد'))
        }
        else{
          this.presentToast('ثبت شد');
        }
    });
  }
  submitWin(){

  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }
}
