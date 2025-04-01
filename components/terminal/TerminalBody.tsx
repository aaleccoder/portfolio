"use client"

import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import { Language } from "@/lib/translations"
import { TRANSLATIONS } from "@/lib/translations"
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
}

export function TerminalBody({
  activeSection,
  commandHistory,
  commandInput,
  setCommandInput,
  handleCommandSubmit,
  showCursor,
  theme,
  t
}: TerminalBodyProps) {
  return (
    <div 
      className="p-4 h-[80vh] overflow-y-auto rounded-b-lg" 
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
      />

      {/* Content Sections */}
      {activeSection === "about" && <AboutSection theme={theme} t={t} />}
      {activeSection === "projects" && <ProjectsSection theme={theme} t={t} />}
      {activeSection === "skills" && <SkillsSection theme={theme} t={t} />}
      {activeSection === "contact" && <ContactSection theme={theme} t={t} />}
    </div>
  )
}