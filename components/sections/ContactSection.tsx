"use client"

import { Terminal, Mail, Github, Linkedin } from "lucide-react"
import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import { Language } from "@/lib/translations"
import { TRANSLATIONS } from "@/lib/translations"

type ContactSectionProps = {
  theme: typeof THEMES[ThemeName]
  t: typeof TRANSLATIONS[Language]
}

export function ContactSection({ theme, t }: ContactSectionProps) {
  return (
    <div className="mt-6 p-4 rounded-lg border" 
      style={{ backgroundColor: theme.bg, borderColor: theme.border }}
    >
      <div className="flex items-center gap-2 mb-4" style={{ color: theme.accent2 }}>
        <Terminal size={18} />
        <h2 className="text-lg font-bold">{t.contactTitle}</h2>
      </div>

      <p className="mb-4">{t.contactContent}</p>

      <div className="grid gap-3">
        <a
          href="mailto:alejandroperezacosta105@gmail.com"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Mail size={18} />
          alejandroperezacosta105@gmail.com
        </a>

        <a
          href="https://github.com/aaleccoder"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Github size={18} />
          github.com/aaleccoder
        </a>

        <a
          href="https://www.linkedin.com/in/alejandro-perez-acosta-073378324/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Linkedin size={18} />
          https://www.linkedin.com/in/alejandro-perez-acosta-073378324/
        </a>
      </div>

      </div>  
      )
}