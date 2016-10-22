import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ServerRoutes } from './../../common/server.routes';
import { BaseService } from './../../common/common.base.service';

import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router';

@Injectable()
export class DashboardService extends BaseService {
 
  constructor(public http: Http, public router: Router) {
    super(http, router);
  }

  public getAllUsers(): Promise<any[]> {
    let headers = this.getHeadersAuth();
    let options = new RequestOptions({ headers: headers });

    return this.http.get(ServerRoutes.USER_ALL_USERS, options)
      .toPromise()
      .then(
         response => response.json() ,
         err => {
           this.handleError(err)
           }
      )
      .catch(this.handleError);
  }


}

