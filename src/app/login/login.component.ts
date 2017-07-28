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

    this.model = { email: 'EMAIL212223', password: '123' }
  }

  ngOnInit() {
  }

  onSubmit() {


  }

  clickButton() {
    this.model.email = "wapper";
    console.log(this.model.email);
  }

}
