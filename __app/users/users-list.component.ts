import { Component } from '@angular/core';


import { UserService } from './../app.service';

@Component({
  selector   : 'users-list',
  templateUrl: 'app/users/users-list.component.html',
  providers  : [UserService]
})
export class UsersListComponent {
  private appName: string = "Equinooxe web app";
  private users: Array<any>;
  constructor(private userService: UserService) {
    this.userService.getUsers().then(
      resp => {
        this.users = [{id:1,username:"Med",email:"med@mail.com"}];
      },
      err => { console.log(err); }
    );

  }

}