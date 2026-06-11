import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [
    CommonModule,
    ContactListComponent, // <-- Importante incluirlo
    ChatWindowComponent   // <-- Importante incluirlo
  ],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent {
  // Este componente actúa como contenedor estructural, 
  // la lógica interna la maneja de forma reactiva el ChatService.
}