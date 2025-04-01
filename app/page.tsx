"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Terminal, 
  User, 
  Code, 
  BookOpen, 
  Globe, 
  PaintBucket 
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define themes
const THEMES = {
  gruvbox: {
    name: "Gruvbox",
    bg: "#282828",
    bgDarker: "#1d2021",
    bgLighter: "#3c3836",
    border: "#504945",
    text: "#ebdbb2",
    accent: "#b8bb26",
    accent2: "#fabd2f",
    link: "#83a598"
  },
  monokai: {
    name: "Monokai",
    bg: "#272822",
    bgDarker: "#1e1f1c",
    bgLighter: "#3e3d32",
    border: "#49483e",
    text: "#f8f8f2",
    accent: "#a6e22e",
    accent2: "#fd971f",
    link: "#66d9ef"
  },
  oneDark: {
    name: "One Dark Pro",
    bg: "#282c34",
    bgDarker: "#21252b",
    bgLighter: "#3a404b",
    border: "#5c6370",
    text: "#abb2bf",
    accent: "#98c379",
    accent2: "#e5c07b",
    link: "#61afef"
  },
  dracula: {
    name: "Dracula",
    bg: "#282a36",
    bgDarker: "#1e1f29",
    bgLighter: "#44475a",
    border: "#6272a4",
    text: "#f8f8f2",
    accent: "#50fa7b",
    accent2: "#ffb86c",
    link: "#8be9fd"
  }
}

// Define translations
const TRANSLATIONS = {
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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [commandInput, setCommandInput] = useState("")
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [currentTheme, setCurrentTheme] = useState<keyof typeof THEMES>("gruvbox")
  
  const theme = THEMES[currentTheme]
  const t = TRANSLATIONS[language]

  // Terminal welcome text
  const welcomeText = t.welcome
  
  // Help command response
  const helpResponse = t.help

  // Type the welcome text on load
  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setTypedText(welcomeText.substring(0, i))
      i++
      if (i > welcomeText.length) {
        clearInterval(typing)
        // Show welcome message and automatically execute help command
        setCommandHistory([welcomeText, "$ help", helpResponse])
      }
    }, 50)

    return () => clearInterval(typing)
  }, [language, welcomeText, helpResponse])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Handle command input
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const command = commandInput.trim().toLowerCase()
    let response = ""

    // Process commands
    if (command === "help") {
      response = helpResponse
    } else if (command === "about") {
      setActiveSection("about")
      response = t.loading.replace("{section}", "about")
    } else if (command === "projects") {
      setActiveSection("projects")
      response = t.loading.replace("{section}", "projects")
    } else if (command === "skills") {
      setActiveSection("skills")
      response = t.loading.replace("{section}", "skills")
    } else if (command === "contact") {
      setActiveSection("contact")
      response = t.loading.replace("{section}", "contact")
    } else if (command === "language") {
      response = "Available languages: en, es. Usage: language [en|es]"
    } else if (command.startsWith("language ")) {
      const lang = command.split(" ")[1]
      if (lang === "en" || lang === "es") {
        setLanguage(lang)
        response = `Language changed to ${lang === "en" ? "English" : "Spanish"}`
      } else {
        response = "Supported languages: en, es"
      }
    } else if (command === "theme") {
      response = `Available themes: ${Object.keys(THEMES).join(", ")}. Usage: theme [themeName]`
    } else if (command.startsWith("theme ")) {
      const themeName = command.split(" ")[1] as keyof typeof THEMES
      if (THEMES[themeName]) {
        setCurrentTheme(themeName)
        response = `Theme changed to ${THEMES[themeName].name}`
      } else {
        response = `Supported themes: ${Object.keys(THEMES).join(", ")}`
      }
    } else if (command === "clear") {
      setCommandHistory([])
      setCommandInput("")
      return
    } else if (command === "") {
      // Do nothing for empty command
      setCommandInput("")
      return
    } else {
      response = t.commandNotFound.replace("{command}", command)
    }

    // Update command history
    setCommandHistory((prev) => [...prev, `$ ${command}`, response])
    setCommandInput("")
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <div className="font-mono p-4 md:p-8">
        {/* Terminal Header */}
        <div className="flex items-center justify-between" style={{ backgroundColor: theme.bgLighter, borderBottom: `1px solid ${theme.border}` }}>
          <div className="flex items-center gap-2 p-2 rounded-t-lg">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#fb4934" }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#fabd2f" }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#b8bb26" }}></div>
            <span className="ml-2 text-sm">terminal@portfolio ~ {activeSection}</span>
          </div>
          
          <div className="flex items-center gap-2 p-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 p-1 rounded hover:bg-opacity-20" style={{ backgroundColor: `${theme.bgLighter}`, color: theme.link }}>
                <Globe size={16} />
                <span className="text-xs">{language.toUpperCase()}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español (ES)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 p-1 rounded hover:bg-opacity-20" style={{ backgroundColor: `${theme.bgLighter}`, color: theme.link }}>
                <PaintBucket size={16} />
                <span className="text-xs">{theme.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(THEMES).map(([key, themeValue]) => (
                  <DropdownMenuItem 
                    key={key}
                    onClick={() => setCurrentTheme(key as keyof typeof THEMES)}
                  >
                    {themeValue.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-4 h-[80vh] overflow-y-auto rounded-b-lg" 
          style={{ 
            backgroundColor: theme.bgDarker,
            border: `1px solid ${theme.border}`,
            borderTop: "0" 
          }}
        >
          {/* Command History */}
          <div className="mb-4">
            {commandHistory.map((line, index) => (
              <div
                key={index}
                className={cn("whitespace-pre-wrap mb-1")}
                style={{ color: line.startsWith("$") ? theme.accent : theme.text }}
              >
                {line}
              </div>
            ))}
          </div>

          {/* Command Input */}
          <form onSubmit={handleCommandSubmit} className="flex items-center">
            <span style={{ color: theme.accent }} className="mr-2">$</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              className="flex-1 outline-none border-none"
              style={{ backgroundColor: "transparent", color: theme.text }}
              autoFocus
            />
            <span 
              className={cn("ml-0.5 w-2 h-5", showCursor ? "opacity-100" : "opacity-0")}
              style={{ backgroundColor: theme.text }}
            ></span>
          </form>

          {/* Content Sections */}
          {activeSection === "about" && (
            <div className="mt-6 p-4 rounded-lg border" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
              <div className="flex items-center gap-2 mb-2" style={{ color: theme.accent2 }}>
                <User size={18} />
                <h2 className="text-lg font-bold">{t.aboutTitle}</h2>
              </div>
              <p className="mb-2">
                {t.aboutContent1}
              </p>
              <p>
                {t.aboutContent2}
              </p>
            </div>
          )}

          {activeSection === "projects" && (
            <div className="mt-6 p-4 rounded-lg border" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
              <div className="flex items-center gap-2 mb-4" style={{ color: theme.accent2 }}>
                <Code size={18} />
                <h2 className="text-lg font-bold">{t.projectsTitle}</h2>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "E-commerce Platform",
                    description:
                      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
                    repo: "https://github.com/username/ecommerce",
                    demo: "https://ecommerce-demo.vercel.app",
                  },
                  {
                    title: "Task Management App",
                    description:
                      "A React-based task management application with drag-and-drop functionality and local storage.",
                    repo: "https://github.com/username/task-manager",
                    demo: "https://task-manager-demo.vercel.app",
                  },
                  {
                    title: "Weather Dashboard",
                    description: "A weather dashboard that fetches and displays weather data from multiple APIs.",
                    repo: "https://github.com/username/weather-app",
                    demo: "https://weather-app-demo.vercel.app",
                  },
                ].map((project, index) => (
                  <div key={index} className="p-3 rounded border" style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}>
                    <h3 className="font-bold mb-1" style={{ color: theme.accent }}>{project.title}</h3>
                    <p className="text-sm mb-2">{project.description}</p>
                    <div className="flex gap-4 text-sm">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline"
                        style={{ color: theme.link }}
                      >
                        <Github size={14} />
                        {t.repository}
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline"
                        style={{ color: theme.link }}
                      >
                        <ExternalLink size={14} />
                        {t.liveDemo}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div className="mt-6 p-4 bg-[#282828] rounded-lg border border-[#504945]">
              <div className="flex items-center gap-2 text-[#fabd2f] mb-4">
                <BookOpen size={18} />
                <h2 className="text-lg font-bold">Skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-[#3c3836] rounded border border-[#504945]">
                  <h3 className="text-[#b8bb26] font-bold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript / JavaScript</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS / SCSS</li>
                    <li>Redux / Context API</li>
                  </ul>
                </div>

                <div className="p-3 bg-[#3c3836] rounded border border-[#504945]">
                  <h3 className="text-[#b8bb26] font-bold mb-2">Backend</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Node.js / Express</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB / PostgreSQL</li>
                    <li>Firebase / Supabase</li>
                    <li>GraphQL</li>
                  </ul>
                </div>

                <div className="p-3 bg-[#3c3836] rounded border border-[#504945]">
                  <h3 className="text-[#b8bb26] font-bold mb-2">Tools & Others</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Git / GitHub</li>
                    <li>Docker</li>
                    <li>CI/CD Pipelines</li>
                    <li>Jest / Testing Library</li>
                    <li>Figma / Adobe XD</li>
                  </ul>
                </div>

                <div className="p-3 bg-[#3c3836] rounded border border-[#504945]">
                  <h3 className="text-[#b8bb26] font-bold mb-2">Soft Skills</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Project Management</li>
                    <li>Technical Writing</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === "contact" && (
            <div className="mt-6 p-4 bg-[#282828] rounded-lg border border-[#504945]">
              <div className="flex items-center gap-2 text-[#fabd2f] mb-4">
                <Terminal size={18} />
                <h2 className="text-lg font-bold">Contact</h2>
              </div>

              <p className="mb-4">Feel free to reach out to me through any of the following channels:</p>

              <div className="grid gap-3">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 text-[#83a598] hover:text-[#b8bb26] transition-colors"
                >
                  <Mail size={18} />
                  your.email@example.com
                </a>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#83a598] hover:text-[#b8bb26] transition-colors"
                >
                  <Github size={18} />
                  github.com/yourusername
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#83a598] hover:text-[#b8bb26] transition-colors"
                >
                  <Linkedin size={18} />
                  linkedin.com/in/yourusername
                </a>
              </div>

              <div className="mt-6 p-4 bg-[#3c3836] rounded border border-[#504945]">
                <h3 className="text-[#b8bb26] font-bold mb-3">Send me a message</h3>
                <form className="grid gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 bg-[#282828] border border-[#504945] rounded text-[#ebdbb2] w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 bg-[#282828] border border-[#504945] rounded text-[#ebdbb2] w-full"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="p-2 bg-[#282828] border border-[#504945] rounded text-[#ebdbb2] w-full resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="p-2 bg-[#b8bb26] text-[#1d2021] rounded font-bold hover:bg-[#98971a] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

