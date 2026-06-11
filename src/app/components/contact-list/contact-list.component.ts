import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ChatService } from '../../services/chat.service';
import { FilterContactsPipe } from '../../pipes/filter-contacts.pipe';
import { Router } from '@angular/router'; // <-- Importar el Router

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    FilterContactsPipe
  ],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  private router = inject(Router);
  private chatService = inject(ChatService);

  conversations = this.chatService.conversations;
  activeConversationId = this.chatService.activeConversationId;
  searchTerm: string = '';

  // Propiedades para controlar el Formulario Reactivo
  showForm: boolean = false;
  newChatForm!: FormGroup;

  constructor() {
    // Inicializamos el formulario reactivo con validaciones
    this.newChatForm = new FormGroup({
      contactName: new FormControl('', [
        Validators.required, 
        Validators.minLength(3)
      ])
    });
  }

  toggleNewChatForm() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      // Si abren el formulario, actualizamos la ruta a /nuevo
      this.router.navigate(['/nuevo']);
    } else {
      this.newChatForm.reset();
      this.router.navigate(['/chats']);
    }
  }

  onCreateChat() {
    if (this.newChatForm.invalid) return;

    // Obtenemos el valor de forma segura desde el formulario reactivo
    const name = this.newChatForm.value.contactName;
    
    // Llamamos al servicio para crearlo
    this.chatService.createConversation(name);

    // Reseteamos y ocultamos el formulario
    this.newChatForm.reset();
    this.showForm = false;
  }
 
  onSelectConversation(id: string) {
    // Cambiamos la URL de la barra de direcciones
    this.router.navigate(['/chats', id]);
  }
}