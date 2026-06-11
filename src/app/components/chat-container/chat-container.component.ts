import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';  
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [CommonModule, ContactListComponent, ChatWindowComponent],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public chatService = inject(ChatService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    // Escuchamos los cambios en los parámetros de la URL (el :id)
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const id = params.get('id');
        
        if (id) {
          // Si hay ID en la URL, cargamos esa conversación
          this.chatService.selectConversation(id);
        } else {
          // NUEVO: Si NO hay ID (ej: cuando vas a /chats a secas),
          // le avisamos al servicio que limpie la selección activa.
          this.chatService.clearActiveConversation();
        }
      });
  }
}