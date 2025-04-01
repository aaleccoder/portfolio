"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ThemeName, THEMES } from "@/lib/themes"
import { Language, TRANSLATIONS } from "@/lib/translations"
import { TerminalHeader } from "@/components/terminal/TerminalHeader"
import { TerminalBody } from "@/components/terminal/TerminalBody"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [commandInput, setCommandInput] = useState("")
  const [language, setLanguage] = useState<Language>("en")
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("gruvbox")
  
  // Create ref for the command input
  const inputRef = useRef<HTMLInputElement>(null)
  
  const theme = THEMES[currentTheme]
  const t = TRANSLATIONS[language]

  // Terminal welcome text
  const welcomeText = t.welcome
  
  // Help command response
  const helpResponse = t.help

  // Type the welcome text on load
  useEffect(() => {
    // Immediately show welcome message and help command
    setTypedText(welcomeText)
    setCommandHistory([welcomeText, "$ help", helpResponse])
    
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [language, welcomeText, helpResponse])

  // Always focus input when clicking anywhere in the terminal
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
    
    // Add click event listener to the document
    document.addEventListener('click', handleClick)
    
    return () => {
      // Clean up the event listener
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Keep focus on input even when using keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture key events if user is typing in another input/textarea
      if (
        document.activeElement &&
        (document.activeElement.tagName === 'INPUT' || 
         document.activeElement.tagName === 'TEXTAREA') &&
        document.activeElement !== inputRef.current
      ) {
        return
      }
      
      // Focus the terminal input for any key press
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
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
      const lang = command.split(" ")[1] as Language
      if (lang === "en" || lang === "es") {
        setLanguage(lang)
        response = `Language changed to ${lang === "en" ? "English" : "Spanish"}`
      } else {
        response = "Supported languages: en, es"
      }
    } else if (command === "theme") {
      response = `Available themes: ${Object.keys(THEMES).join(", ")}. Usage: theme [themeName]`
    } else if (command.startsWith("theme ")) {
      const themeName = command.split(" ")[1] as ThemeName
      if (THEMES[themeName]) {
        setCurrentTheme(themeName)
        response = `Theme changed to ${THEMES[themeName].name}`
      } else {
        response = `Supported themes: ${Object.keys(THEMES).join(", ")}`
      }
    } else if (command === "clear") {
      setCommandHistory([])
      setCommandInput("")
      setActiveSection("home") // Reset the active section to home
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
    
    // Re-focus the input after submitting
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <div className="font-mono p-4 md:p-8">
        {/* Terminal Header */}
        <TerminalHeader 
          activeSection={activeSection}
          language={language}
          setLanguage={setLanguage}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          theme={theme}
        />
        
        {/* Terminal Body */}
        <TerminalBody
          activeSection={activeSection}
          commandHistory={commandHistory}
          commandInput={commandInput}
          setCommandInput={setCommandInput}
          handleCommandSubmit={handleCommandSubmit}
          showCursor={showCursor}
          theme={theme}
          t={t}
          inputRef={inputRef}
        />
      </div>
    </div>
  )
}

