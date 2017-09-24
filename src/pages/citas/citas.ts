import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PerfilJobsPage } from '../perfil-jobs/perfil-jobs';


@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html'
})
export class CitasPage {
  selectedItem: any;
  public event = {
    month: '2017-09-24',
    timeStarts: '04:50',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param

  }
  agendar() {
  let alert = this.alertCtrl.create({
    title: 'Hemos agendado tu cita',
    subTitle: 'puedes revisarla en tu perfil',
    buttons: ['OK']
  });
  alert.present();
}
regresar() {
  this.navCtrl.push(PerfilJobsPage,{
  });
}
}
