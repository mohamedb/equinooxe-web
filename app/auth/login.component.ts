import { Component } from '@angular/core';


import { UserService } from './../app.service';

@Component({
  selector   : 'auth-login',
  templateUrl: 'app/auth/login.component.html',
  providers  : [UserService]
})
export class LoginComponent {
 
  constructor(private userService: UserService) {
    this.userService.getUsers().then(
      resp => {
        
      },
      err => { console.log(err); }
    );

  }

}