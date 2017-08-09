import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService, IConfig } from '../app.config';
import { LoginServiceService } from "app/services/login-service.service";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from "app/shared/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  @Input()
  userDetail: any;
  config: IConfig;
  errorMessage: string;

  constructor(private loginService: LoginServiceService, private configService: ConfigService, private router: Router) {
    this.user = { userName: "vahap", Password: "demir" };

  }

  ngOnInit() {
    this.config = this.configService.getAppConfig();
  }

  onSubmit() {


  }

  login() {

    if (!this.userDetail) {
      console.log(this.user);
      this.loginService.login(this.config.logInUrl, this.user)
        .subscribe(items => {
          if (items != null) {
            this.userDetail = items;
            console.log(this.userDetail);
            this.loginService.setGreetingMessage(this.userDetail.email);
            // this.userDetail = this.dataSharingService.setUserQuery(items);

            this.router.navigate(['/home']);
          }
        },
        error => this.errorMessage = <any>error

        );
    }

  }

}
