# 💬 Chat Application - Angular

¡Bienvenido/a al proyecto de la aplicación de Chat desarrollado en Angular! Esta es una Single Page Application (SPA) moderna, fluida y totalmente reactiva que simula una experiencia de mensajería en tiempo real (estilo WhatsApp Web o Telegram).

El proyecto fue construido siguiendo los estándares más recientes de la industria, utilizando componentes independientes (Standalone Components), manejo de estado global reactivo mediante Signals y un diseño adaptativo (Responsive Design) sin depender de librerías CSS externas.

🌐 Despliegue Público: Podés ver y probar la aplicación en vivo desde cualquier dispositivo
 aquí: https://chat-angular-snowy.vercel.app/chats

---

## 🚀 Características Clave y Requisitos Cumplidos

La aplicación cumple rigurosamente con los lineamientos avanzados del desarrollo en Angular:

1. Arquitectura Limpia y Modular (Componentes Standalone): Todo el proyecto prescinde del uso de los antiguos NgModule. Cada componente gestiona de manera autónoma sus propias dependencias a través de la propiedad imports.
2. Manejo de Estado Reactivo con Signals: Implementación avanzada de signal y computed en un servicio centralizado (ChatService). Toda la aplicación reacciona instantáneamente a las actualizaciones de datos de manera limpia, eficiente e inmutable.
3. Enrutamiento Avanzado (Angular Router): Estructura de navegación SPA completa:
   - /chats: Vista general o pantalla de bienvenida.
   - /chats/:id: Apertura e interactividad dinámica de la conversación con el contacto seleccionado.
   - /nuevo: Despliegue directo del formulario de creación de chats.
4. Formularios Reactivos (ReactiveForms): Creación dinámica de nuevos contactos utilizando FormGroup, FormControl y validaciones nativas estrictas (Validators.required, Validators.minLength(3)).
5. Transformación de Datos Eficiente (Pipes Personalizados): Creación del Pipe independiente FilterContactsPipe para el filtrado en tiempo real de la lista de contactos mediante una barra de búsqueda inteligente.
6. Animaciones Nativas (Angular Animations): Fluidez visual en la interfaz con transiciones acopladas al ciclo de vida del DOM (:enter). Los mensajes nuevos aparecen en pantalla con un elegante efecto fade-in y un ligero desplazamiento vertical.
7. Experiencia de Usuario Pulida (UX):
   - Scroll Automático Inteligente: Monitoreo del estado mediante el ciclo de vida effect y ViewChild para deslizar suavemente la pantalla hacia abajo cuando llega o se envía un mensaje.
   - Bot Simulador con Retardo: Cada mensaje enviado activa una respuesta automática simulada del contacto tras un retraso de 2 segundos empleando respuestas dinámicas aleatorias.
8. Diseño Adaptativo (Responsive con CSS Puro): Interfaz maquetada enteramente con Flexbox y Media Queries tradicionales. En computadoras se despliega a doble columna y en dispositivos móviles cambia a una navegación fluida de pantalla completa con botón integrado de "Volver".

---

## 📂 Estructura del Proyecto

El código está organizado siguiendo las mejores prácticas de la guía de estilos oficial de Angular (Kebab-Case en nombres de carpetas):

src/app/
├── components/
│   ├── chat-container/      # Componente inteligente (Smart Component / Layout Padre)
│   ├── chat-window/         # Ventana de mensajes activos, feed e input de texto
│   ├── contact-list/        # Barra izquierda, buscador por pipe y formulario reactivo
│   └── message-bubble/      # Componente atómico para el renderizado individual de burbujas
├── mocks/
│   └── chat-mock.ts         # Datos predefinidos para la inicialización (Mock Data)
├── models/
│   └── chat.model.ts        # Interfaces y contratos de tipado fuerte (User, Message, Conversation)
├── pipes/
│   └── filter-contacts.pipe # Pipe personalizado para filtrado en tiempo real
└── services/
    └── chat.service.ts      # Cerebro del chat: Estado global administrado con Signals

---

## 🛠️ Tecnologías Utilizadas

- Angular 17+ (Sintaxis moderna de bloques de control como @for, @if, @empty).
- TypeScript (Tipado estricto de datos).
- CSS3 / Flexbox (Estilos estructurados nativos, libre de dependencias de diseño).
- Angular Animations API (trigger, transition, animate, style).
- DiceBear API (Generación automatizada de avatares vectoriales únicos para los contactos creados dinámicamente).

---

## 💻 Instalación y Ejecución Local

Si deseas clonar el repositorio y correr el proyecto en tu entorno local, sigue estos pasos:

1. Clonar el repositorio:
   git clone https://github.com/juliomormando/Chat_Angular.git 

2. Instalar las dependencias del proyecto:
   npm install

3. Ejecutar el servidor de desarrollo:
   ng serve

4. Acceder desde el navegador:
   Abre una pestaña en http://localhost:4200/ para interactuar con la aplicación localmente.

---

Desarrollado con dedicación como entrega final, implementando la arquitectura moderna de Angular.
 