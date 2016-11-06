import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { RolesService } from './roles.service';
import { RolePermissionViewModel } from './role-permission.viewmodel';
import { RoleModel } from './role.model';
import { PermissionModel } from './permission.model';

@Component({
  selector: 'roles-form',
  template: require('./roles.form.html'),
  providers: [RolesService]
})
export class RolesFormComponent {
  public rolePermissionViewModel: RolePermissionViewModel = new RolePermissionViewModel();

  constructor(private rolesService: RolesService) {
    this.init();
  }
  public init(): void {
    this.rolesService.get().then(
      response => {
        this.rolePermissionViewModel = response;
      }
    )
  }
  public addRole(): void {
    let role = new RoleModel();
    role.name = "new_role_" + role.id;
    this.rolePermissionViewModel.newRoles.push(role);
    return;
  }
  public addPermission(): void {
    let permission = new PermissionModel();
    permission.name = "new_permission_" + permission.id;
    this.rolePermissionViewModel.newPermissions.push(permission);
    return;
  }

  public removeRole(id: number) {
    _.remove(this.rolePermissionViewModel.newRoles, e => {
      return e.id == id;
    })
  }
  public removePermission(id: number) {
    _.remove(this.rolePermissionViewModel.newPermissions, e => {
      return e.id == id;
    })
  }
  public save(): void {
    this.rolesService.save(this.rolePermissionViewModel).then(
      res => console.log(res)
    )
  }
}
