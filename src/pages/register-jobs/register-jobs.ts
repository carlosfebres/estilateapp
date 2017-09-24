import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { TutorialPage } from '../tutorial/tutorial';


@Component({
  selector: 'page-Register-Jobs',
  templateUrl: 'register-jobs.html'
})
export class RegisterJobsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
  }
  enviado() {
  let alert = this.alertCtrl.create({
    title: 'Correo Enviado',
    subTitle: 'Estaremos en contacto!',
    buttons: ['Deacuerdo']
  });
  alert.present();
}
login() {
  this.navCtrl.push(TutorialPage,{
  });
}
}
