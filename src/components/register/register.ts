import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';
import { Res } from '../../models/res';


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
    email : '',
    number :'',
    username :'',
    password: ''
  }
  message:string;

  constructor(public navCtrl: NavController, public dataservice: DataserviceProvider) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }

  navigateToLogin(pageName: string){
    this.navCtrl.push(pageName);
  }

  registerNow(user){
    this.dataservice.RegisterNewUser(user).subscribe((res: Res) => {
      if(res.message){
        this.message = res.message;
      }else if(res.success){
        this.navCtrl.push('LoginPage', {
          msg: 'You can log in now'
        });
      }
    })

  }

}
