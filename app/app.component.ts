import { Component } from '@angular/core';


import { UserService } from './app.service';
import { UsersListComponent} from './users/users-list.component';


@Component({
  selector: 'equinooxe-app',
  template: `
    <h1> {{appName}}  </h1>
    <br>
    <users-list></users-list> 
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