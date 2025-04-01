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
    <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg border" 
      style={{ backgroundColor: theme.bg, borderColor: theme.border }}
    >
      <div className="flex items-center gap-2 mb-3 md:mb-4" style={{ color: theme.accent2 }}>
        <Terminal size={16} className="md:size-18" />
        <h2 className="text-base md:text-lg font-bold">{t.contactTitle}</h2>
      </div>

      <p className="mb-3 md:mb-4 text-xs md:text-sm">{t.contactContent}</p>

      <div className="grid gap-2 md:gap-3 text-xs md:text-sm">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Mail size={14} className="md:size-18" />
          your.email@example.com
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Github size={14} className="md:size-18" />
          github.com/yourusername
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Linkedin size={14} className="md:size-18" />
          linkedin.com/in/yourusername
        </a>
      </div>

      <div className="mt-4 md:mt-6 p-2 md:p-4 rounded border" 
        style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
      >
        <h3 className="font-bold mb-2 md:mb-3 text-sm md:text-base" style={{ color: theme.accent }}>{t.sendMessage}</h3>
        <form className="grid gap-2 md:gap-3">
          <input
            type="text"
            placeholder={t.yourName}
            className="p-1.5 md:p-2 rounded border w-full text-xs md:text-sm"
            style={{ 
              backgroundColor: theme.bgDarker, 
              borderColor: theme.border,
              color: theme.text
            }}
          />
          <input
            type="email"
            placeholder={t.yourEmail}
            className="p-1.5 md:p-2 rounded border w-full text-xs md:text-sm"
            style={{ 
              backgroundColor: theme.bgDarker, 
              borderColor: theme.border,
              color: theme.text
            }}
          />
          <textarea
            placeholder={t.yourMessage}
            rows={3}
            className="p-1.5 md:p-2 rounded border w-full resize-none text-xs md:text-sm"
            style={{ 
              backgroundColor: theme.bgDarker, 
              borderColor: theme.border,
              color: theme.text
            }}
          ></textarea>
          <button
            type="submit"
            className="p-1.5 md:p-2 rounded font-bold transition-colors text-xs md:text-sm"
            style={{ 
              backgroundColor: theme.accent, 
              color: theme.bgDarker
            }}
          >
            {t.send}
          </button>
        </form>
      </div>
    </div>
  )
}