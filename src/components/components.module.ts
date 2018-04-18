import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { SearchComponent } from './search/search';
@NgModule({
	declarations: [LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SearchComponent],
	imports: [
		IonicModule.forRoot(LoginComponent),
		IonicModule.forRoot(RegisterComponent)
	],
	exports: [LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SearchComponent]
})
export class ComponentsModule {}
