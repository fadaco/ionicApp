import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';
import { User } from '../../models/loginUser';
import { DashboardComponent } from '../dashboard/dashboard';

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



  constructor(public navCtrl: NavController, public dataservice: DataserviceProvider) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }


  navigateToRegister(pageName: string){
    this.navCtrl.push(pageName);
  }

  authenicationLogin(user){
    this.dataservice.LoginUser(user).subscribe(res => {
     if(res){
       this.navCtrl.push(DashboardComponent);
     }else{
       console.log('unsoff')
     }
    })
  }

}
