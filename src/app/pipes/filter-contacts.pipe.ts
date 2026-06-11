import { Pipe, PipeTransform } from '@angular/core';
import { Conversation } from '../models/chat.model';

@Pipe({
  name: 'filterContacts',
  standalone: true // Lo hacemos standalone para poder usarlo donde queramos
})
export class FilterContactsPipe implements PipeTransform {

  // El primer argumento es el dato que recibe el pipe (la lista de conversaciones)
  // El segundo argumento es el parámetro de búsqueda (el texto del input)
  transform(conversations: Conversation[], searchText: string): Conversation[] {
    // Si la lista está vacía o no hay texto de búsqueda, devolvemos la lista completa
    if (!conversations || !searchText) {
      return conversations;
    }

    // Pasamos el texto a minúsculas para que la búsqueda no sea estricta (case-insensitive)
    const search = searchText.toLowerCase().trim();

    // Filtramos el arreglo buscando coincidencias en el nombre del participante
    return conversations.filter(conv => 
      conv.participant.name.toLowerCase().includes(search)
    );
  }
}