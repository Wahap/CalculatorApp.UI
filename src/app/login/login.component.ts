import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService, IConfig } from '../app.config';
import { LoginServiceService } from "app/services/login-service.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any;
  @Input()
  userDetail: any;
  config: IConfig;
  errorMessage: string;

  constructor(private loginService: LoginServiceService,private configService: ConfigService, private router: Router) {
    this.model = {};
     this.model = { email:"mohamed.mohamed@jato.com" , password:"1234" };
  }

  ngOnInit() {
        this.config = this.configService.getAppConfig();
  }

  onSubmit() {


  }

  login() {

    if (!this.userDetail) {
      this.loginService.login(this.config.logInUrl, this.model)
        .subscribe(items => {
          if (items.token) {
            this.userDetail=items;
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
