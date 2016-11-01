import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalState } from '../../../global.state';
import { LoginService } from './../../../pages/login/login.service';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None,
  providers: [LoginService]
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public baProfilePicture:string  = 'assets/img/app/profile/greenCat.jpg';
  constructor(private state: GlobalState, private loginService: LoginService) {
    this.state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public logout(): void {
    this.loginService.logout();
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
