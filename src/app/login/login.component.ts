import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService, IConfig } from '../app.config';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any;
  
  constructor() {
this.model={};
   // this.model = { email , password: }
  }

  ngOnInit() {
  }

  onSubmit() {


  }

  login() {
  
    alert("email "+this.model.email +" and Pass"+this.model.password);

  }

}
