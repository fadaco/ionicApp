import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }

  navigateToLogin(pageName: string){
    this.navCtrl.push(pageName);
  }

}
