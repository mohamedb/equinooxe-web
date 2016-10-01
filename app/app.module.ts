import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './app.service';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }