import {RolePermissionModel} from './role-permission.model';
import {BaseModel } from './../../common/base.model';

export class PermissionModel extends BaseModel {
    public name: String;
    public userRoles: Array<any>=[];
    public rolePermissions: Array<RolePermissionModel>=[];

    public constructor() {
          super()
    }
}