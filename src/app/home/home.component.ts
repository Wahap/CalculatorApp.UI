import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "app/services/login-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
message:string;
  constructor(private loginService: LoginServiceService) { 

    this.message="login is successful. username="+ loginService.getGreetingMessage();
  }

  ngOnInit() {

  }

}
