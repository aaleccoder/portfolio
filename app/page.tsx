"use client"

import type React from "react"
import { useState, useEffect } from "react"
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
        />
      </div>
    </div>
  )
}

