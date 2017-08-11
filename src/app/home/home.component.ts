import { Component, OnInit, Input } from '@angular/core';
import { LoginServiceService } from "app/services/login-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  numbers: any;
  number1: any;
  number2: any;

  constructor(private loginService: LoginServiceService) {

    this.message = "login is successful. username=" + loginService.getGreetingMessage();

    this.numbers = { number1: "", number2: "" };
  }

  ngOnInit() {

  }
  calculateSum() {
    alert(this.number1 + this.number2);
  }
  calculateSub(number1, number2) {
    alert(number1 - number2);
  }
  calculateMultply(number1, number2) {
    alert(number1 * number2);
  }
  calculateDivide(number1, number2) {
    alert(number1 / number2);
  }


}
