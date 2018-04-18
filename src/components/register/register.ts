import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';


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

  user = {
    email : 'ggg@f.com',
    number :'08056555545',
    username :'fadaco'
  }

  constructor(public navCtrl: NavController, public dataservice: DataserviceProvider) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }

  navigateToLogin(pageName: string){
    this.navCtrl.push(pageName);
  }

  registerNow(){
       // this.dataservice.registerNewUser(this.user)
       //     .subscribe(res => {
       //       console.log(res);
       //     })

  }

}
