import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from './home.component';
import { Http, Response, ConnectionBackend, RequestOptions, Headers, HttpModule } from '@angular/http';
import { LoginServiceService } from "app/services/login-service.service";
import { ConfigService } from "app/app.config";

import { HomeService } from "app/services/home.service";
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpModule,RouterTestingModule ],
      providers:[LoginServiceService,ConfigService,HomeService],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    var data=component.calculateSub("2","4");
    expect(component).toBeTruthy();
  });
});
