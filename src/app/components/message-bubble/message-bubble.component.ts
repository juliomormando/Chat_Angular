import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Message } from '../../models/chat.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.css'],
  // Dejamos declarada la animación aquí para que sea reutilizable por el HTML
  animations: [
    trigger('fadeInMessage', [
      // :enter es un alias para cuando el elemento se inserta en el DOM (vía @for o *ngFor)
      transition(':enter', [
        // Estado inicial (oculto y un poquito hacia abajo)
        style({ 
          opacity: 0, 
          transform: 'translateY(10px)' 
        }),
        // Transición: dura 150 milisegundos, con un efecto de desaceleración (ease-out)
        animate('150ms ease-out', style({ 
          opacity: 1, 
          transform: 'translateY(0)' 
        }))
      ])
    ])
  ]
})
export class ChatWindowComponent {
  @Input() messages: Message[] = [];
}