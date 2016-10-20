export class ServerRoutes {
    static BASE_URL = "http://localhost:8080/equinooxe/ws";
    static JSON_HEADER = { 'Content-Type': 'application/json' };

    static AUTH_LOGIN = ServerRoutes.BASE_URL+"/auth/login";

    static USER_ALL_USERS = ServerRoutes.BASE_URL + 'secure/user/all';  // URL to web api
    
    
}