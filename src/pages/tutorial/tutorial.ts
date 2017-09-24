import { Component, ViewChild } from '@angular/core';

import { MenuController, NavController, Slides } from 'ionic-angular';

import { trigger, state, style, transition, animate } from '@angular/animations'

import { RegisterPage } from '../register/register';
import { RegisterJobsPage } from '../register-jobs/register-jobs';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 0
      })),
      state('invisible', style({
        opacity: 1
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})

export class TutorialPage {

  visibleState = 'visible';

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
  ) { }

  toggleVisible() {
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }

  login() {
    this.navCtrl.setRoot(ListPage,{
    });

  }
  register() {
    this.navCtrl.push(RegisterPage,{
    });

  }
  trabajo() {
    this.navCtrl.push(RegisterJobsPage,{
    });

  }
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);
  }

}
