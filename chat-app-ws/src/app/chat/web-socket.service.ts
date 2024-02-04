import { Injectable } from '@angular/core';
import { WebSocketChat } from './chat.component.model';
import ReconnectingWebSocket from 'reconnecting-websocket';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  websocket: WebSocket | null = null;
  websocketMessage: WebSocketChat[] = [];

  constructor() { }
    

  openWebsocketConnection() {
    this.websocket = new WebSocket("ws://localhost:8181");
    this.websocket.onopen = (event) => {
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
    if(this.websocket != null)
    if (this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(JSON.stringify(chatMsg));
    } else {
      console.error('WebSocket connection is not open yet. Message not sent.');
    }
  }

  closeWebsocketConnection() {
    if(this.websocket != null)
    this.websocket.close();
  }

}
