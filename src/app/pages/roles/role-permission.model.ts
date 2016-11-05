import { RoleModel } from './role.model';
import { PermissionModel } from './permission.model';
import { BaseModel } from './../../common/base.model';

export class RolePermissionModel extends BaseModel {
    public role: RoleModel;
    public permission: PermissionModel;
    public constructor() {
        super()
    }
}