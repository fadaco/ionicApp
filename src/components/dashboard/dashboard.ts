import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {

  text: string;

  constructor(public navCtrl: NavController) {

  }

  addContactTab(pageName: string){
    this.navCtrl.push(pageName);
  }

}
