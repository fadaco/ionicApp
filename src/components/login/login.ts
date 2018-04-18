import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';
import { User } from '../../models/loginUser';
import { Res } from '../../models/res';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;
  user: User = {
    email: '',
    password: ''
  }
  message:string;
  token: string;
  successlogin: string;


  constructor(public navCtrl: NavController, public dataservice: DataserviceProvider, private navParams: NavParams) {
   this.successlogin = this.navParams.get('msg');
  }


  navigateToRegister(pageName: string){
    this.navCtrl.push(pageName);
  }

  authenicationLogin(user){
    this.dataservice.LoginUser(user).subscribe((res: Res) => {
       if(res.token) {
           this.token =  res.token;
        this.navCtrl.setRoot('DashboardPage');
       }else{
           this.message = "Wrong Credential"
       }

    })
  }

}
