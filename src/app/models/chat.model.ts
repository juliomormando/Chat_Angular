// 1. Estado de conexión del usuario
export type UserStatus = 'online' | 'offline' | 'away';

// 2. Modelo de Usuario (las personas de la lista)
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  status: UserStatus; 
}

// 3. Modelo de Mensaje
export interface Message {
  id: string;
  senderId: string;   // ID del usuario que envía el mensaje
  receiverId: string; // ID del usuario que recibe (o del grupo)
  text: string;
  timestamp: Date;    // Hora y fecha del envío
  isRead: boolean;    // Para saber si el mensaje ya fue visto
}

// 4. Modelo de Conversación (Ideal para vincular la lista con la ventana de chat)
export interface Conversation {
  id: string;
  participant: User;         // El usuario con el que estamos hablando
  messages: Message[];       // Historial de mensajes de este chat
  lastMessage?: Message;     // Para mostrar el "copete" en la lista de personas
  unreadCount: number;       // Contador de mensajes sin leer
}