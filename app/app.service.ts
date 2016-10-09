import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  static BASE_URL = "http://localhost:8080/equinooxe/ws/secure"
  static ALL_USERS = UserService.BASE_URL + '/user/all';  // URL to web api
  static LOGIN_URL = "http://localhost:8080/equinooxe/ws/auth/login"

  constructor(private http: Http) { }

  getUsers(): Promise<any[]> {

    let headers = new Headers(
      {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa("m@m.com" + ":" + "med"),
        "accepts": "application/json",
      });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(UserService.ALL_USERS, options)
      .toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
