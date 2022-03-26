import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { DataService, User } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(private data: DataService,private router1: Router,private toastController : ToastController)  {
    if(localStorage.getItem("usertoken"))        this.router1.navigate(['home']);

  }

  ngOnInit() {
  }
  submit(){

    var user:User={username:this.username, password:this.password}
      this.data.login(user).subscribe(  
      res => {
        console.log('HTTP response', res)
        localStorage.setItem('usertoken',res.access);
        this.router1.navigate(['home']);
        this.presentToast('ورود با موفقیت انجام شد');
      },
      err => {console.log('HTTP Error', err);
      this.presentToast('خطا در ورود');
    })
  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }

}
