import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {ConfigService, IConfig} from '../app.config';
 import {   Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log("o yeah man");
  }

}
