export const TRANSLATIONS = {
  en: {
    welcome: "Welcome to my terminal portfolio! Type 'help' to see available commands.",
    help: `
Available commands:
- help: Show this help message
- about: Show information about me
- projects: View my projects
- skills: View my technical skills
- contact: View contact information
- clear: Clear the terminal
- language: Change language (en/es)
- theme: Change terminal theme
`,
    aboutTitle: "About Me",
    aboutContent1: "Hello! I'm a developer passionate about creating clean, efficient, and user-friendly applications. I specialize in frontend development with React and TypeScript, but I'm also comfortable working with backend technologies.",
    aboutContent2: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors.",
    projectsTitle: "Projects",
    repository: "Repository",
    liveDemo: "Live Demo",
    skillsTitle: "Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Others",
    softSkills: "Soft Skills",
    contactTitle: "Contact",
    contactContent: "Feel free to reach out to me through any of the following channels:",
    sendMessage: "Send me a message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    send: "Send Message",
    commandNotFound: "Command not found: {command}. Type 'help' for available commands.",
    loading: "Loading {section} section..."
  },
  es: {
    welcome: "¡Bienvenido a mi portafolio terminal! Escribe 'help' para ver los comandos disponibles.",
    help: `
Comandos disponibles:
- help: Mostrar este mensaje de ayuda
- about: Mostrar información sobre mí
- projects: Ver mis proyectos
- skills: Ver mis habilidades técnicas
- contact: Ver información de contacto
- clear: Limpiar la terminal
- language: Cambiar idioma (en/es)
- theme: Cambiar tema de la terminal
`,
    aboutTitle: "Sobre Mí",
    aboutContent1: "¡Hola! Soy un desarrollador apasionado por crear aplicaciones limpias, eficientes y fáciles de usar. Me especializo en desarrollo frontend con React y TypeScript, pero también me siento cómodo trabajando con tecnologías backend.",
    aboutContent2: "Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o disfrutando del aire libre.",
    projectsTitle: "Proyectos",
    repository: "Repositorio",
    liveDemo: "Demo en vivo",
    skillsTitle: "Habilidades",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Herramientas y Otros",
    softSkills: "Habilidades Blandas",
    contactTitle: "Contacto",
    contactContent: "No dudes en contactarme a través de cualquiera de los siguientes canales:",
    sendMessage: "Envíame un mensaje",
    yourName: "Tu Nombre",
    yourEmail: "Tu Email",
    yourMessage: "Tu Mensaje",
    send: "Enviar Mensaje",
    commandNotFound: "Comando no encontrado: {command}. Escribe 'help' para ver los comandos disponibles.",
    loading: "Cargando sección de {section}..."
  }
}

export type Language = keyof typeof TRANSLATIONS;