import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, HttpModule, RequestOptions, JsonpModule } from '@angular/http';
import { MaterialModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ConfigService} from './app.config';
import { AppRoutingModule, routedComponents} from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginServiceService } from "app/services/login-service.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routedComponents,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginServiceService,ConfigService, { provide:ConfigService,  useClass: ConfigService  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
