import { Component, inject, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  animations: [
    trigger('fadeInMessage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('180ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ChatWindowComponent {
  private chatService = inject(ChatService);

  // 1. Capturamos el contenedor de mensajes usando una referencia local (#scrollContainer)
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  get activeConversation() {
    return this.chatService.activeConversation();
  }

  newMessageText: string = '';

  constructor() {
    // 2. Creamos un efecto que reacciona a los cambios en la conversación activa
    effect(() => {
      // Al ejecutar esta función reactiva, escuchamos cualquier cambio en los mensajes
      const conversation = this.chatService.activeConversation();
      if (conversation && conversation.messages) {
        // Ejecutamos el scroll un milisegundo después para dar tiempo a Angular a renderizar el nuevo HTML
        setTimeout(() => this.scrollToBottom(), 50);
      }
    });
  }

  onSendMessage() {
    if (!this.newMessageText.trim()) return;
    this.chatService.sendMessage(this.newMessageText);
    this.newMessageText = '';
  }

  // 3. Método encargado de llevar la barra de desplazamiento abajo de todo
  private scrollToBottom(): void {
    if (this.scrollContainer) {
      const element = this.scrollContainer.nativeElement;
      element.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth' // Hace que el deslizamiento sea suave y elegante
      });
    }
  }
}