import { Routes } from '@angular/router';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

export const routes: Routes = [
  // 1. Si entran a la raíz, los redirigimos automáticamente a /chats
  { path: '', redirectTo: 'chats', pathMatch: 'full' },

  // 2. /chats y /chats/:id compartirán el contenedor principal del chat
  { path: 'chats', component: ChatContainerComponent },
  { path: 'chats/:id', component: ChatContainerComponent },

  // 3. /nuevo mostrará el formulario independiente (o la barra con el formulario abierto)
  // Nota: Para mantener tu diseño, podemos hacer que /nuevo también cargue el contenedor
  // pero le avise que debe mostrar el formulario de creación.
  { path: 'nuevo', component: ChatContainerComponent },
  
  // Comodín por si escriben cualquier otra cosa
  { path: '**', redirectTo: 'chats' }
];