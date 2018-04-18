import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataserviceProvider {

  constructor(public http: HttpClient) {
  }

  LoginUser(user){
    return this.http.post('http://localhost:5200/user/login', user);
  }

}
