import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(
    public navCtrl: NavController,
  ) { }

  startApp() {
    this.navCtrl.setRoot(ListPage, {
    });
  }

  register() {
    this.navCtrl.push(RegisterPage, {
    });
  }

}
