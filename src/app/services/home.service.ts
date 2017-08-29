import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
    results: string[];

  constructor(private http: Http) {

   }

    calculate(url: string, userState: any): any {
    return  this.http.post(url,userState).map(data => {
    return  data.json();
    });
  }



}
