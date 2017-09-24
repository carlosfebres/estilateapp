import { Component } from '@angular/core';

import {ModalController, Platform, NavController, NavParams } from 'ionic-angular';

import { CitasPage } from '../citas/citas';


@Component({
  selector: 'page-perfil-jobs',
  templateUrl: 'perfil-jobs.html'
})
export class PerfilJobsPage {
  selectedItem: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }
//   openModal(characterNum) {
//     let modal = this.modalCtrl.create( ModalContentPage );
//     modal.present();
//   }
//   @Component({
//   template: `
//     <ion-header>
//       <ion-toolbar>
//         <ion-title>
//           Description
//         </ion-title>
//         <ion-buttons start>
//           <button ion-button (click)="dismiss()">
//             <span ion-text color="primary" showWhen="ios">Cancel</span>
//             <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
//           </button>
//         </ion-buttons>
//       </ion-toolbar>
//     </ion-header>
//     <ion-content>
//       <ion-list>
//           <ion-item>
//             <ion-avatar item-start>
//               <img src="{{character.image}}">
//             </ion-avatar>
//             <h2>{{character.name}}</h2>
//             <p>{{character.quote}}</p>
//           </ion-item>
//           <ion-item *ngFor="let item of character['items']">
//             {{item.title}}
//             <ion-note item-end>
//               {{item.note}}
//             </ion-note>
//           </ion-item>
//       </ion-list>
//     </ion-content>
//     `
// })
citas() {
  this.navCtrl.push(CitasPage, {
  });
}
}
