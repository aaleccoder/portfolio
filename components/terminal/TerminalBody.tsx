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
      className="p-3 md:p-4 h-[calc(100vh-80px)] md:h-[80vh] overflow-y-auto rounded-b-lg cursor-text" 
      style={{ 
        backgroundColor: theme.bgDarker,
        border: `1px solid ${theme.border}`,
        borderTop: "0" 
      }}
    >
      {/* Command History */}
      <CommandHistory commandHistory={commandHistory} theme={theme} />

      {/* Command Input */}
      <CommandInput 
        commandInput={commandInput}
        setCommandInput={setCommandInput}
        handleCommandSubmit={handleCommandSubmit}
        showCursor={showCursor}
        theme={theme}
        inputRef={inputRef}
      />

      {/* Content Sections */}
      {activeSection === "about" && <AboutSection theme={theme} t={t} />}
      {activeSection === "projects" && <ProjectsSection theme={theme} t={t} />}
      {activeSection === "skills" && <SkillsSection theme={theme} t={t} />}
      {activeSection === "contact" && <ContactSection theme={theme} t={t} />}
    </div>
  )
}