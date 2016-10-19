import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list.component';
import { LoginComponent } from './auth/login.component';

import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      }
    ])
  ],
  providers: [

  ],
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }