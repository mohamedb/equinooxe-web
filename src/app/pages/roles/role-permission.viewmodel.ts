import { RoleModel } from './role.model';
import { PermissionModel } from './permission.model';

export class RolePermissionViewModel {
    /**
     * Comes from the forms
     */
    public newRoles: Array<RoleModel> = [];
    public newPermissions: Array<PermissionModel> = [];

    /**
     * Already existing roles and permissions
     */
    public roleEntities: Array<any> = [];
    public permissionEntities: Array<any> = [];

    
}