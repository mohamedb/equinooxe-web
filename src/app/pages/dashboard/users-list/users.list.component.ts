import {Component} from '@angular/core';
import {  Input , Output} from '@angular/core';
@Component({
  selector: 'users-list',
  template: require('./users.list.html'),
})
export class UsersList {
   @Input() users: Array<any>;
  constructor() {
  }
}
