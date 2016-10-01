import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

 

@Injectable()
export class UserService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  static BASE_URL= "http://localhost:8080/equinooxe/ws/"
  static ALL_USERS =  UserService.BASE_URL+'user/all';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<any[]> {
    return this.http.get( UserService.ALL_USERS)
               .toPromise()
               .then(response => response.json() as any[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  
    return Promise.reject(error.message || error);
  }
}
 