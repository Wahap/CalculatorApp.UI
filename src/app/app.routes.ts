import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent }  from './login/login.component';
import { HomeComponent } from "app/home/home.component";
// import { HomeComponent }  from './home/home.component';
// import { DetailComponent }  from './detail/detail.component';
// import { NotifyComponent }  from './notify/notify.component';
// import { UsersComponent }  from './users/users.component';
const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'jato.wlc.drpl', component: LoginComponent },
	 { path: 'home', component: HomeComponent },
	// { path: 'details', component: DetailComponent } ,
	// { path: 'notify', component: NotifyComponent },
	// { path: 'users', component: UsersComponent }  ,
	// { path: 'subscriberUser', component: UsersComponent }  
	
];

// - Updated Export
export const AppRoutingModule = RouterModule.forRoot(routes);
export const routedComponents = [LoginComponent];