// chat.component.ts

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WebSocketService } from './web-socket.service';
import { WebSocketChat } from './chat.component.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  constructor(public webSocket: WebSocketService) {}

  ngOnInit(): void {
    this.webSocket.openWebsocketConnection();
  }

  ngOnDestroy(): void {
    this.webSocket.closeWebsocketConnection();
  }

  sendMessage(wsMessageForm: NgForm) {
    const chatMsg = new WebSocketChat(wsMessageForm.value.user,
      wsMessageForm.value.message);

    this.webSocket.sendWebsocketMessage(chatMsg);
    wsMessageForm.controls['message'].reset();
  }
}
