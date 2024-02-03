import { Injectable } from '@angular/core';
import { WebSocketChat } from './chat.component.model';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  websocket: WebSocket;
  websocketMessage: WebSocketChat[] = [];

  constructor() {
    this.websocket = new WebSocket('ws://localhost:4200/websocket');
  }

  openWebsocketConnection() {

    this.websocket.onmessage = (event) => {
      console.log(event);
    }

    this.websocket.onmessage = (event) => {
      console.log(event);
      const chatMsg = JSON.parse(event.data);
      this.websocketMessage.push(chatMsg);
    }

    this.websocket.onclose = (event) => {
      console.log(event);
    }
  }

  sendWebsocketMessage(chatMsg: WebSocketChat) {
    this.websocket.send(JSON.stringify(chatMsg));
  }

  closeWebsocketConnection() {
    this.websocket.close();
  }

}
