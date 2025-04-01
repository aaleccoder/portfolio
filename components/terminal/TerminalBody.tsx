"use client"

import React from "react"
import { ThemeName, THEMES } from "@/lib/themes"
import { Language, TRANSLATIONS } from "@/lib/translations"
import { cn } from "@/lib/utils"
import { CommandHistory } from "./CommandHistory"
import { CommandInput } from "./CommandInput"
import { AboutSection } from "../sections/AboutSection"
import { ProjectsSection } from "../sections/ProjectsSection"
import { SkillsSection } from "../sections/SkillsSection"
import { ContactSection } from "../sections/ContactSection"

type TerminalBodyProps = {
  activeSection: string
  commandHistory: string[]
  commandInput: string
  setCommandInput: (value: string) => void
  handleCommandSubmit: (e: React.FormEvent) => void
  showCursor: boolean
  theme: typeof THEMES[ThemeName]
  t: typeof TRANSLATIONS[Language]
  inputRef: React.RefObject<HTMLInputElement>
}

export function TerminalBody({
  activeSection,
  commandHistory,
  commandInput,
  setCommandInput,
  handleCommandSubmit,
  showCursor,
  theme,
  t,
  inputRef
}: TerminalBodyProps) {
  return (
    <div 
      className="p-4 h-[80vh] overflow-y-auto rounded-b-lg cursor-text" 
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
          ref={inputRef}
          type="text"
          value={commandInput}
          onChange={(e) => setCommandInput(e.target.value)}
          className="flex-1 outline-none border-none bg-transparent"
          style={{ color: theme.text }}
          autoComplete="off"
          spellCheck="false"
        />
      </form>

      {/* Content Sections */}
      {activeSection === "about" && <AboutSection theme={theme} t={t} />}
      {activeSection === "projects" && <ProjectsSection theme={theme} t={t} />}
      {activeSection === "skills" && <SkillsSection theme={theme} t={t} />}
      {activeSection === "contact" && <ContactSection theme={theme} t={t} />}
    </div>
  )
}