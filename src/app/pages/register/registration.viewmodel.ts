
/**
 * ViewModel for user registration
 * 
 * @export
 * @class UserRegistrationViewModel
 */
export class UserRegistrationViewModel {
    public username: string;
    public email: string;
    public password: string;
    public registrationType: string = "BASIC";
    public roleIds: Array<number> = [];
    public roles:Array<any>=[];
}