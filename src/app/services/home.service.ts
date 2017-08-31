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
    return this.http.post(url, userState).map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBooks(url: string, userState: any): Observable<any> {
    return this.http.post(url, userState).map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getComments(url: string, userState: any): Observable<any> {

    // ...using get request
    return this.http.post(url, userState)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
