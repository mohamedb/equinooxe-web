import { NgModule }      from '@angular/core';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'roles-form',
  template: require('./roles.form.html'),
})
export class RolesFormComponent {
  public roleElements:Array<any>=[];
   public form: FormGroup;
  constructor() {
  }
  public init():void {

  }
  public newElement():void {
    this.roleElements.push({name:"new_role"});
    return ;
  }
}
