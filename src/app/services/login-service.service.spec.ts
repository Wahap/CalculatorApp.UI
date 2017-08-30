import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, ConnectionBackend, RequestOptions, Headers, HttpModule } from '@angular/http';
import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [LoginServiceService]
    });
  });

  it('should be created', inject([LoginServiceService], (service: LoginServiceService) => {
    expect(service).toBeTruthy();
  }));
});
