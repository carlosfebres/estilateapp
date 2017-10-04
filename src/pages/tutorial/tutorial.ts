import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { RegisterJobsPage } from '../register-jobs/register-jobs';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})

export class TutorialPage {


  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
  ) { }


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
