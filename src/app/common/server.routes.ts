export class ServerRoutes {
    static BASE_URL = "http://localhost:8080/equinooxe/ws";
    static JSON_HEADER = { 'Content-Type': 'application/json' };

    static AUTH_LOGIN = ServerRoutes.BASE_URL+"/auth/login";
    static AUTH_LOGOUT = ServerRoutes.BASE_URL+"/auth/logout";

    /**
     * for both operation get/post
     * 
     * @static
     * 
     * @memberOf ServerRoutes
     */
    static REGISTER_USER =  ServerRoutes.BASE_URL + '/secure/register/';  
    /**
     * get all user
     * 
     * @static
     * 
     * @memberOf ServerRoutes
     */
    static USER_ALL_USERS = ServerRoutes.BASE_URL + '/secure/user/all';   
    
    
}