export class ServerRoutes {
    static BASE_URL = "http://localhost:8080/equinooxe/ws";
    static SECURE_BASE_URL = ServerRoutes.BASE_URL + "/secure";

    static JSON_HEADER = { 'Content-Type': 'application/json' };

    static AUTH_LOGIN = ServerRoutes.BASE_URL + "/auth/login";
    static AUTH_LOGOUT = ServerRoutes.BASE_URL + "/auth/logout";

    /**
     * for both operation get/post
     * 
     * @static
     * 
     * @memberOf ServerRoutes
     */
    static REGISTER_USER = ServerRoutes.SECURE_BASE_URL + '/register/';

    static ROLE_PERMISSION = ServerRoutes.SECURE_BASE_URL + '/rolepermission/';
    static ROLE_PERMISSION_DELETE = ServerRoutes.SECURE_BASE_URL + '/rolepermission/delete';

    /**
     * get all user
     * 
     * @static
     * 
     * @memberOf ServerRoutes
     */
    static USER_ALL_USERS = ServerRoutes.BASE_URL + '/secure/user/all';


}