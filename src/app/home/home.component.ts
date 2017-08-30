import { Component, OnInit, Input } from '@angular/core';
import { LoginServiceService } from "app/services/login-service.service";
import { HomeService } from "app/services/home.service";
import { ConfigService, IConfig } from "app/app.config";
import { Router, ActivatedRoute } from '@angular/router';


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
  config: IConfig;
  errorMessage: string;

  constructor(private loginService: LoginServiceService, private homeService: HomeService, private configService: ConfigService, private router: Router) {

    this.numbers = { num1: "", num2: "" };
  }

  ngOnInit() {
    this.config = this.configService.getAppConfig();
  }
  calculateSum(number1, number2) {

    this.numbers.num1 = number1;
    this.numbers.num2 = number2;

    this.homeService.calculate(this.config.calculate + "/sum", this.numbers)
      .subscribe(result => {
        if (result != null) {
          this.message = result;
          //   this.router.navigate(['/home']);
        }
      },
      error => this.errorMessage = <any>error
      );
  }
  calculateSub(number1, number2) {
    this.numbers.num1 = number1;
    this.numbers.num2 = number2;
    this.homeService.calculate(this.config.calculate + "/sub", this.numbers)
      .subscribe(result => {
        if (result != null) {
          this.message = result;
        }
      },
      error => this.errorMessage = <any>error
      );
  }
  calculateMultiply(number1, number2) {
    this.numbers.num1 = number1;
    this.numbers.num2 = number2;
    this.homeService.calculate(this.config.calculate + "/multiply", this.numbers)
      .subscribe(result => {
        if (result != null) {
          this.message = result;
        }
      },
      error => this.errorMessage = <any>error
      );
  }
  calculateDivide(number1, number2) {
    this.numbers.num1 = number1;
    this.numbers.num2 = number2;
    this.homeService.calculate(this.config.calculate + "/divide", this.numbers)
      .subscribe(result => {
        if (result != null) {
          this.message = result;
        }
      },
      error => this.errorMessage = <any>error
      );
  }


}
