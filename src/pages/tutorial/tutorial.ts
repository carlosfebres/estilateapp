import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides } from 'ionic-angular';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
  ) { }

  startApp() {
    this.navCtrl.push(LoginPage,{
    });
  }
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);
  }

}
