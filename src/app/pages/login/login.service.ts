import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ServerRoutes } from './../../common/server.routes';

import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private headers = new Headers(ServerRoutes.JSON_HEADER);


  constructor(private http: Http, private router: Router) { }

  public login(username: string, password: string): Promise<any[]> {
    /**
     * Headers are note necessary here!
     */
    let headers = this.getHeadersFor(username, password);
    let options = new RequestOptions({ headers: headers });
    let loginObject = {
      username: username,
      password: password,
      rememberMe: true
    }
    return this.http.post(ServerRoutes.AUTH_LOGIN, loginObject, options)
      .toPromise()
      .then(response => {
        if (response.ok) {
          /** if success set the auth hash in the local storage */
          localStorage.setItem("auth", btoa(username + ":" + password));
          console.log('auth: ', localStorage.getItem('auth'));
          
          this.router.navigate(['/pages']);
        }

      })
      .catch(this.handleError);
  }

  public logout(): Promise<any[]> {
    return this.http.get(ServerRoutes.AUTH_LOGOUT)
      .toPromise()
      .then(response => {
        response.json() as any[];
        if (response.ok) {
          /** clear local storage auth key */
          localStorage.setItem("auth", null);
          this.router.navigate(['/login']);
          alert(response.json().message);
        }
      })
      .catch(this.handleError);
  }

  private getHeadersFor(username: string, password: string): Headers {
    return new Headers(
      {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(username + ":" + password),
        "accepts": "application/json",
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

