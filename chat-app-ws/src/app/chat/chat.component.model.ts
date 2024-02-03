export class WebSocketChat {
    user: string;
    message: string;

    constructor(user: string, message: string){
        this.message = message;
        this.user = user;
    }
}