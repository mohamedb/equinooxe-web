import { Component } from '@angular/core';


import { UserService } from './app.service';

@Component({
  selector: 'equinooxe-app',
  template: `
    <h1> {{appName}} adapted from Angular App starter!</h1>
    <br>
    <h4>Ping server: get a user </h4>
          <h5>id : {{user?.id}} </h5>
          <h5>Username  : {{user?.username}} </h5>
    `,
  providers: [UserService]
})
export class AppComponent {
  private appName: string = "Equinooxe web app";
  private user:any;
  constructor(private userService: UserService) {
    this.userService.getUsers().then(
      resp => {
       this.user=resp;
      },
      err => { console.log(err); }
      );

  }

}