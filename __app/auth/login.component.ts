import { Component } from '@angular/core';


import { UserService } from './../app.service';

@Component({
  selector: 'auth-login',
  templateUrl: 'app/auth/login.component.html',
  providers: [UserService]
})
export class LoginComponent {
 
  username:string;
  password:string;
  error:string="";

  constructor(private userService: UserService) {
    this.userService.getUsers().then(
      resp => { },
      err => { console.log(err); }
    );
  }

  public submit():void {
    if(this.password && this.username){
       this.error="";
    }
    else {
       this.error="username && password are required!";
    }
  }

}