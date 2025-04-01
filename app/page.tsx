"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Mail, Linkedin, Terminal, User, Code, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [commandInput, setCommandInput] = useState("")

  // Terminal welcome text
  const welcomeText = `Welcome to my terminal portfolio! Type 'help' to see available commands.`
  
  // Help command response
  const helpResponse = `
Available commands:
- help: Show this help message
- about: Show information about me
- projects: View my projects
- skills: View my technical skills
- contact: View contact information
- clear: Clear the terminal
`

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
  }, [])

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
      response = "Loading about section..."
    } else if (command === "projects") {
      setActiveSection("projects")
      response = "Loading projects section..."
    } else if (command === "skills") {
      setActiveSection("skills")
      response = "Loading skills section..."
    } else if (command === "contact") {
      setActiveSection("contact")
      response = "Loading contact section..."
    } else if (command === "clear") {
      setCommandHistory([])
      setCommandInput("")
      return
    } else if (command === "") {
      // Do nothing for empty command
      setCommandInput("")
      return
    } else {
      response = `Command not found: ${command}. Type 'help' for available commands.`
    }

    // Update command history
    setCommandHistory((prev) => [...prev, `$ ${command}`, response])
    setCommandInput("")
  }

  return (
    <div className="min-h-screen bg-[#282828] text-[#ebdbb2] font-mono p-4 md:p-8">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 bg-[#3c3836] p-2 rounded-t-lg border-b border-[#504945]">
        <div className="w-3 h-3 rounded-full bg-[#fb4934]"></div>
        <div className="w-3 h-3 rounded-full bg-[#fabd2f]"></div>
        <div className="w-3 h-3 rounded-full bg-[#b8bb26]"></div>
        <span className="ml-2 text-sm">terminal@portfolio ~ {activeSection}</span>
      </div>

      {/* Terminal Body */}
      <div className="bg-[#1d2021] p-4 h-[80vh] overflow-y-auto rounded-b-lg border border-[#504945] border-t-0">
        {/* Command History */}
        <div className="mb-4">
          {commandHistory.map((line, index) => (
            <div
              key={index}
              className={cn("whitespace-pre-wrap mb-1", line.startsWith("$") ? "text-[#b8bb26]" : "text-[#ebdbb2]")}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Command Input */}
        <form onSubmit={handleCommandSubmit} className="flex items-center">
          <span className="text-[#b8bb26] mr-2">$</span>
          <input
            type="text"
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none text-[#ebdbb2]"
            autoFocus
          />
          <span className={cn("ml-0.5 w-2 h-5 bg-[#ebdbb2]", showCursor ? "opacity-100" : "opacity-0")}></span>
        </form>

        {/* Content Sections */}
        {activeSection === "about" && (
          <div className="mt-6 p-4 bg-[#282828] rounded-lg border border-[#504945]">
            <div className="flex items-center gap-2 text-[#fabd2f] mb-2">
              <User size={18} />
              <h2 className="text-lg font-bold">About Me</h2>
            </div>
            <p className="mb-2">
              Hello! I'm a developer passionate about creating clean, efficient, and user-friendly applications. I
              specialize in frontend development with React and TypeScript, but I'm also comfortable working with
              backend technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying the outdoors.
            </p>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="mt-6 p-4 bg-[#282828] rounded-lg border border-[#504945]">
            <div className="flex items-center gap-2 text-[#fabd2f] mb-4">
              <Code size={18} />
              <h2 className="text-lg font-bold">Projects</h2>
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
                <div key={index} className="p-3 bg-[#3c3836] rounded border border-[#504945]">
                  <h3 className="text-[#b8bb26] font-bold mb-1">{project.title}</h3>
                  <p className="text-sm mb-2">{project.description}</p>
                  <div className="flex gap-4 text-sm">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#83a598] hover:underline"
                    >
                      <Github size={14} />
                      Repository
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#83a598] hover:underline"
                    >
                      <ExternalLink size={14} />
                      Live Demo
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
  )
}

