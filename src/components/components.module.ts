import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
@NgModule({
	declarations: [LoginComponent,
    RegisterComponent],
	imports: [
		IonicModule.forRoot(LoginComponent),
		IonicModule.forRoot(RegisterComponent)
	],
	exports: [LoginComponent,
    RegisterComponent]
})
export class ComponentsModule {}
