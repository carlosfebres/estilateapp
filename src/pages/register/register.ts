import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { TutorialPage } from '../tutorial/tutorial';


@Component({
  selector: 'page-Register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }
  login() {
    this.navCtrl.push(TutorialPage,{
    });
  }
}
