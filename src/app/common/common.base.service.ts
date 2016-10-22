import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ServerRoutes } from './server.routes';

import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router';

@Injectable()
export class BaseService {

  private headers = new Headers(ServerRoutes.JSON_HEADER);

  constructor(public http: Http, public router: Router) {
    if (localStorage.getItem("auth") === ''
      || localStorage.getItem("auth") === null
      || localStorage.getItem("auth").length < 5) {

      this.router.navigate(['/login']);
      console.error("Auth problem missing hash! ");
    }
  }

  public getHeadersAuth(): Headers {
    let headerObject = {
      "Content-Type": "application/json",
      "Authorization": "Basic " + localStorage.getItem("auth"),
      "accepts": "application/json",
    }

    return new Headers(
      headerObject
    );
  }

  public handleError(error: any): Promise<any> {
    if (error.status === 403 ||error.status === 401 || error.status === 0) {
      this.router.navigate(['/login']);
      console.warn("Auth problem! code: ",error.status );
      return null;
    }
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

