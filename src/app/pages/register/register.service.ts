import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ServerRoutes } from './../../common/server.routes';
import { BaseService } from './../../common/common.base.service';
import { UserRegistrationViewModel } from './registration.viewmodel';

import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router';

@Injectable()
export class RegisterService extends BaseService {

  constructor(public http: Http, public router: Router) {
    super(http, router);
  }

  public register(registrationVM: UserRegistrationViewModel): Promise<any[]> {
    /**
     * Headers are note necessary here!
     */
    let headers = this.getHeadersAuth();
    let options = new RequestOptions({ headers: headers });

    return this.http.post(ServerRoutes.USER_REGISTER, registrationVM, options)
      .toPromise()
      .then(
      response => {
        if (response.ok) {
          /** if success set the auth hash in the local storage */
          console.log(response.json());
          this.router.navigate(['/login']);
        } } 
        )
      .catch(this.handleError);
  }


}

