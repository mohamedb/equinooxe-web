import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { RolesService } from './roles.service';
import { RolePermissionViewModel } from './role-permission.viewmodel';
import { RoleModel } from './role.model';
import { PermissionModel } from './permission.model';
import { RolePermissionDeleteViewModel } from './role-permission-delete.viewmodel';

@Component({
  selector: 'roles-form',
  template: require('./roles.form.html'),
  providers: [RolesService]
})
export class RolesFormComponent {
  public rolePermissionViewModel: RolePermissionViewModel = new RolePermissionViewModel();
  public rolePermissionDeleteViewModel: RolePermissionDeleteViewModel = new RolePermissionDeleteViewModel();
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
    role.name = "new_role_" + role.tempId;
    this.rolePermissionViewModel.newRoles.push(role);
    return;
  }
  public addPermission(): void {
    let permission = new PermissionModel();
    permission.name = "new_permission_" + permission.tempId;
    this.rolePermissionViewModel.newPermissions.push(permission);
    return;
  }

  public removeRole(id: number) {
    _.remove(this.rolePermissionViewModel.newRoles, e => {
      return e.tempId == id;
    })
  }
  public removePermission(id: number) {
    _.remove(this.rolePermissionViewModel.newPermissions, e => {
      return e.tempId == id;
    })
  }

  public removeRoleEntity(id: number) {
    this.rolePermissionDeleteViewModel.roles.ids.push(id);
  }

  public removePermissionEntity(id: number) {
    this.rolePermissionDeleteViewModel.permissions.ids.push(id);
  }

  public saveDelete(): void {
    this.rolesService.delete(this.rolePermissionDeleteViewModel).then(
      res => {
        console.log(res);
        this.init();
      }
    )
  }

  public save(): void {
    this.rolesService.save(this.rolePermissionViewModel).then(
      res => console.log(res)
    )
  }
}
