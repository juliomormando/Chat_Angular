import { Injectable, signal, computed } from '@angular/core';
import { Conversation, Message } from '../models/chat.model';
import { MOCK_CONVERSATIONS } from '../mocks/chat-mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // 1. Estado privado (Signals)
  private conversationsSignal = signal<Conversation[]>(MOCK_CONVERSATIONS);
  private activeConversationIdSignal = signal<string | null>(null);

  // 2. Estado público expuesto (Read-only para los componentes)
  public conversations = this.conversationsSignal.asReadonly();
  public activeConversationId = this.activeConversationIdSignal.asReadonly();

  // 3. Señal computada: se actualiza automáticamente cuando cambia el ID activo o la lista
  public activeConversation = computed(() => {
    const id = this.activeConversationIdSignal();
    if (!id) return null;
    return this.conversationsSignal().find(c => c.id === id) || null;
  });

  constructor() {
    // Al arrancar, podemos preseleccionar la primera conversación si existe
    /* if (MOCK_CONVERSATIONS.length > 0) {
      this.selectConversation(MOCK_CONVERSATIONS[0].id);
    }
      */
  }

  // Acción: Limpiar la conversación seleccionada (útil para pantallas móviles)
  clearActiveConversation() {
    this.activeConversationIdSignal.set(null);
  }

  // 4. Acción: Seleccionar un chat de la lista
  selectConversation(id: string) {
    this.activeConversationIdSignal.set(id);
    
    // Opcional: Limpiar el contador de no leídos al entrar al chat
    this.conversationsSignal.update(conversations => 
      conversations.map(c => c.id === id ? { ...c, unreadCount: 0 } : c)
    );
  }

  // 5. Acción: Enviar un nuevo mensaje y activar la respuesta automática
  sendMessage(text: string) {
    const currentActiveId = this.activeConversationIdSignal();
    const currentActiveChat = this.activeConversation();
    
    if (!currentActiveId || !text.trim() || !currentActiveChat) return;

    // 1. Crear el mensaje que envía el usuario ("me")
    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      senderId: 'me',
      receiverId: currentActiveChat.participant.id,
      text: text.trim(),
      timestamp: new Date(),
      isRead: true
    };

    // 2. Insertar el mensaje del usuario en el estado
    this.conversationsSignal.update(conversations => 
      conversations.map(c => {
        if (c.id === currentActiveId) {
          return {
            ...c,
            messages: [...c.messages, userMessage],
            lastMessage: userMessage
          };
        }
        return c;
      })
    );

    // 3. RESPUESTA AUTOMÁTICA CON RETARDO (Ej: 2 segundos)
    setTimeout(() => {
      // Volvemos a verificar si el usuario sigue en la misma conversación
      const chatAlMomentoDelRespondo = this.conversationsSignal().find(c => c.id === currentActiveId);
      if (!chatAlMomentoDelRespondo) return;

      // Respuestas simpáticas aleatorias para que el bot no diga siempre lo mismo
      const respuestasBootcamp = [
        "¡Excelente! Me parece perfecto.",
        "Dale, me copa la idea. Avisame cuando avances.",
        "Buenísimo, justo estaba revisando eso mismo.",
        "Recibido. Dejame que lo pruebo y te aviso.",
        "¡Qué buena onda! Quedamos así entonces."
      ];
      const respuestaAleatoria = respuestasBootcamp[Math.floor(Math.random() * respuestasBootcamp.length)];

      const botMessage: Message = {
        id: `msg_bot_${Date.now()}`,
        senderId: currentActiveChat.participant.id, // El emisor ahora es el contacto
        receiverId: 'me',
        text: respuestaAleatoria,
        timestamp: new Date(),
        isRead: false
      };

      // Insertar la respuesta del Bot en el estado
      this.conversationsSignal.update(conversations => 
        conversations.map(c => {
          if (c.id === currentActiveId) {
            return {
              ...c,
              messages: [...c.messages, botMessage],
              lastMessage: botMessage
            };
          }
          return c;
        })
      );
    }, 2000); // 2000 milisegundos = 2 segundos de retraso
  }

  // Acción: Crear una nueva conversación dinámicamente
  createConversation(contactName: string) {
    if (!contactName.trim()) return;

    const newId = `conv_${Date.now()}`;
    const newConversation: Conversation = {
      id: newId,
      participant: {
        id: `usr_${Date.now()}`,
        name: contactName.trim(),
        // Usamos DiceBear para que le genere un avatar único basado en su nombre
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(contactName)}`,
        status: 'online' // Arranca online por defecto
      },
      messages: [],
      unreadCount: 0
    };

    // Actualizamos la señal sumando la nueva conversación al principio de la lista
    this.conversationsSignal.update(conversations => [newConversation, ...conversations]);
    
    // Opcional: Seleccionamos automáticamente el chat recién creado
    this.selectConversation(newId);
  }
}