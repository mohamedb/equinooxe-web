import {Component, ViewEncapsulation} from '@angular/core';
import {DashboardService} from './dashboard.service';
@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html'),
  providers: [DashboardService]
})
export class Dashboard {
  users:Array<any> = [];
  constructor(private dashboardService:DashboardService) {
    this.initUsers();
  }

  private initUsers():void {
    this.dashboardService.getAllUsers().then(
      response=> {
        this.users= response;
        console.log('users',this.users);
      }
    )
  }

}
