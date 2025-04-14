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
      aboutContent1: "Hi, I'm Raúl Alejandro Pérez Acosta, a Junior Programmer with solid fundamentals in web development and a growing passion for artificial intelligence. I am driven by technological challenges and the application of technology in medicine, always seeking to merge innovation with human well-being.",
      aboutContent2: "Currently, I'm expanding my skills through continuous learning and hands-on experience, having participated in events like Global GameJam and ICPC. I also gained valuable experience as a statistical assistant, utilizing Excel and Postman to enhance clinical data analysis.",
      projectsTitle: "Projects",
      repository: "Repository",
      liveDemo: "Live Demo",
      projects: [
        {
          title: "This portfolio",
          description:
            "A terminal like experience for a portfolio",
          repo: "https://github.com/aaleccoder/portfolio",
          demo: "https://ecommerce-demo.vercel.app",
        },
        {
          title: "CHATLLM",
          description:
            "A frontend for different models like Gemini",
          repo: "https://github.com/aaleccoder/androidLLM",
          demo: "",
        }
      ],
      skillsTitle: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Others",
      softSkills: "Soft Skills",
      skills: {
        frontend: [
          "React (Basic-Intermediate)",
          "HTML & CSS (Intermediate)",
          "JavaScript (Intermediate)",
          "Next.js (Basic)"
        ],
        backend: [
          "Node.js (Intermediate)",
          "PostgreSQL (Basic)",
          "Express.js (Basic)"
        ],
        tools: [
          "Python for Data Analysis (Basic)",
          "Excel (Intermediate)",
          "Postman Testing",
          "Git & GitHub"
        ],
        softSkills: [
          "Languages: English (Fluent, B2+), Spanish (Native)",
          "Problem Solving",
          "Team Collaboration",
          "Adaptability"
        ]
      },
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
      aboutContent1: "¡Hola! Soy Raúl Alejandro Pérez Acosta, un Programador Junior con sólidos fundamentos en desarrollo web y una pasión creciente por la inteligencia artificial. Me motiva enfrentar desafíos tecnológicos y aplicar la tecnología en la medicina, buscando siempre fusionar la innovación con el bienestar humano.",
      aboutContent2: "Actualmente, estoy ampliando mis habilidades a través del aprendizaje continuo y la experiencia práctica, habiendo participado en eventos como Global GameJam e ICPC. También he adquirido experiencia como ayudante estadístico, utilizando Excel y Postman para optimizar el análisis de datos clínicos.",
      projectsTitle: "Proyectos",
      repository: "Repositorio",
      liveDemo: "Demo en vivo",
      projects: [
        {
          title: "This portfolio",
          description:
            "Una experiencia tipo terminal para un portafolio",
          repo: "https://github.com/aaleccoder/portfolio",
          demo: "https://ecommerce-demo.vercel.app",
        },
        {
          title: "CHATLLM",
          description:
            "Un frontend para diferentes modelos como Gemini",
          repo: "https://github.com/aaleccoder/androidLLM",
          demo: "",
        }
      ],
      skillsTitle: "Habilidades",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas y Otros",
      softSkills: "Habilidades Blandas",
      skills: {
        frontend: [
          "React (Básico-Intermedio)",
          "HTML & CSS (Intermedio)",
          "JavaScript (Intermedio)",
          "Next.js (Básico)"
        ],
        backend: [
          "Node.js (Intermedio)",
          "PostgreSQL (Básico)",
          "Express.js (Básico)"
        ],
        tools: [
          "Python para Análisis de Datos (Básico)",
          "Excel (Intermedio)",
          "Pruebas con Postman",
          "Git & GitHub"
        ],
        softSkills: [
          "Idiomas: Inglés (Fluido, B2+), Español (Nativo)",
          "Resolución de Problemas",
          "Colaboración en Equipo",
          "Adaptabilidad"
        ]
      },
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
