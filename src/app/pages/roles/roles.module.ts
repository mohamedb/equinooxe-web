import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {  RolesFormComponent } from './roles.form.component';
import { routing} from './roles.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
   RolesFormComponent
  ]
})
export default class NewModule {}