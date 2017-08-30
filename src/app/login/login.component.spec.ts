import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LoginServiceService } from "app/services/login-service.service";
import { ConfigService } from "app/app.config";
import { Http, Response, ConnectionBackend, RequestOptions, Headers, HttpModule } from '@angular/http';
import { HomeService } from "app/services/home.service";
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from "app/login/login.component";



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpModule,RouterTestingModule ],
      providers:[LoginServiceService,ConfigService,HomeService],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
