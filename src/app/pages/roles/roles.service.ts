import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ServerRoutes } from './../../common/server.routes';
import { BaseService } from './../../common/common.base.service';


import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router';


import { RolePermissionViewModel } from './role-permission.viewmodel';

@Injectable()
export class RolesService extends BaseService {

  constructor(public http: Http, public router: Router) {
    super(http, router);
  }

  public save(rolePermissionViewModel: RolePermissionViewModel): Promise<any[]> {

    let headers = this.getHeadersAuth();
    let options = new RequestOptions({ headers: headers });

    return this.http.post(ServerRoutes.ROLE_PERMISSION, rolePermissionViewModel, options)
      .toPromise()
      .then(
      response => {
        if (response.ok) {
          /** if success set the auth hash in the local storage */
          console.log(response.json());
          this.router.navigate(['/pages']);
        }
        return response.json();
      }
      )
      .catch(this.handleError);
  }

  public get(): Promise<RolePermissionViewModel> {
    let options = new RequestOptions({ headers: this.getHeadersAuth() });
    return this.http.get(ServerRoutes.ROLE_PERMISSION, options).toPromise().then(
      response => { return response.json() },
      err => {
        console.warn(err.json);
      }
    ).catch(this.handleError);
  }


}

