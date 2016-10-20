import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import {ServerRoutes} from './../server.routes';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class LoginService {

  private headers = new Headers(ServerRoutes.JSON_HEADER);
 

  constructor(private http: Http) { }

  login(username:string,password:string): Promise<any[]> {
    /**
     * Headers are note necessary here!
     */
    let headers = new Headers(
      {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(username + ":" + password),
        "accepts": "application/json",
      });
    let options = new RequestOptions({ headers: headers });
    let loginObject= {
        username:username,
        password:password,
        rememberMe:true
    }
    return this.http.post(ServerRoutes.AUTH_LOGIN,loginObject,options)
      .toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

