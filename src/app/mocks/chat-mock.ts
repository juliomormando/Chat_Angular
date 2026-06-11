import { Conversation } from '../models/chat.model';

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv_1',
    participant: {
      id: 'usr_10',
      name: 'Eliana Rossi',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eliana',
      status: 'online'
    },
        messages: [
      { id: 'm1', senderId: 'usr_10', receiverId: 'me', text: '¡Hola! ¿Cómo viene ese proyecto?', timestamp: new Date(2026, 5, 1, 18, 30), isRead: true },
      { id: 'm2', senderId: 'me', receiverId: 'usr_10', text: 'Buenas! Justo arrancando las interfaces.', timestamp: new Date(2026, 5, 1, 18, 32), isRead: true },
      { id: 'm3', senderId: 'usr_10', receiverId: 'me', text: 'Buenísimo, avisame si necesitás una mano.', timestamp: new Date(2026, 5, 1, 18, 33), isRead: true },
      { id: 'm4', senderId: 'me', receiverId: 'usr_10', text: '¡Dale, de una! Seguro te consulto por el diseño responsive.', timestamp: new Date(2026, 5, 1, 18, 35), isRead: true },
      { id: 'm5', senderId: 'usr_10', receiverId: 'me', text: 'Olvidate, con eso te ayudo al toque. ¿Estás usando Tailwind o CSS puro?', timestamp: new Date(2026, 5, 1, 18, 36), isRead: true },
      { id: 'm6', senderId: 'me', receiverId: 'usr_10', text: 'Estamos con Tailwind para meterle velocidad. Me viene salvando la vida.', timestamp: new Date(2026, 5, 1, 18, 38), isRead: true },
      { id: 'm7', senderId: 'usr_10', receiverId: 'me', text: 'Clave Tailwind, te arma las grillas en dos segundos. ¿La base de datos ya la cerraron?', timestamp: new Date(2026, 5, 1, 18, 40), isRead: true },
      { id: 'm8', senderId: 'me', receiverId: 'usr_10', text: 'Sí, quedó en PostgreSQL. Ya tiramos las migraciones y parece que todo marcha bien.', timestamp: new Date(2026, 5, 1, 18, 42), isRead: true },
      { id: 'm9', senderId: 'usr_10', receiverId: 'me', text: 'Uff, un golazo. Postgre es un caño. Che, ¿y el despliegue lo van a hacer en Vercel o AWS?', timestamp: new Date(2026, 5, 1, 18, 45), isRead: true },
      { id: 'm10', senderId: 'me', receiverId: 'usr_10', text: 'Seguramente Vercel para el frontend y Render para la API, para no complicarnos la vida ahora.', timestamp: new Date(2026, 5, 1, 18, 47), isRead: true },
      { id: 'm11', senderId: 'usr_10', receiverId: 'me', text: 'Mal no te gastes con AWS si es un MVP. Mañana pasame el link del deploy y le pego una mirada fina.', timestamp: new Date(2026, 5, 1, 18, 50), isRead: false },
      { id: 'm12', senderId: 'usr_10', receiverId: 'me', text: 'Y de paso nos tomamos unos mates y charlamos del panel de administración.', timestamp: new Date(2026, 5, 1, 18, 51), isRead: false }
    ],
    lastMessage: { id: 'm3', senderId: 'usr_10', receiverId: 'me', text: 'Buenísimo, avisame si necesitás una mano.', timestamp: new Date(2026, 5, 1, 18, 33), isRead: false },
    unreadCount: 1
  },
  {
    id: 'conv_2',
    participant: {
      id: 'usr_11',
      name: 'Julian Alvarez',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Julian',
      status: 'away'
    },
    messages: [],
    unreadCount: 0
  }
];