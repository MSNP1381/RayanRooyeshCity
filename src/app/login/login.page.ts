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
  isUserAdmin=false;
  constructor(
    private data: DataService,
    private router1: Router,
    private toastController: ToastController
  ) {
    if (localStorage.getItem('usertoken')) {
      if (this.isUserAdmin) {
        this.router1.navigate(['adminpage']);
      } else {
        this.router1.navigate(['home']);
      }
    }
  }

  ngOnInit() {}
  submit() {
    const user: User = { username: this.username, password: this.password };
    this.data.login(user).subscribe(
      (res) => {
        console.log('HTTP response', res);
        this.isAdmin();
        localStorage.setItem('usertoken', res.access);
      },
      (err) => {
        console.log('HTTP Error', err);
        this.presentToast('خطا در ورود');
      }
    );
  }
  public isAdmin() {
    const user: User = { username: this.username, password: this.password };
    this.data
      .is_admin(user)
      .subscribe((res) => {console.log(res);localStorage.setItem('is_admin', res);this.isUserAdmin=res;
      if (this.isUserAdmin) {
        this.router1.navigate(['adminpage']);
      } else {
        this.router1.navigate(['home']);
      }
      this.presentToast('ورود با موفقیت انجام شد');

    },err=>{console.log(err);});
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
    });
    toast.present();
  }
}
