export class WebSocketChatt {
    user: string;
    message: string;

    constructor(user: string, message: string){
        this.message = message;
        this.user = user;
    }
}