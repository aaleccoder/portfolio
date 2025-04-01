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
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Mail size={18} />
          your.email@example.com
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Github size={18} />
          github.com/yourusername
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
          style={{ color: theme.link }}
        >
          <Linkedin size={18} />
          linkedin.com/in/yourusername
        </a>
      </div>

      <div className="mt-6 p-4 rounded border" 
        style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
      >
        <h3 className="font-bold mb-3" style={{ color: theme.accent }}>{t.sendMessage}</h3>
        <form className="grid gap-3">
          <input
            type="text"
            placeholder={t.yourName}
            className="p-2 rounded border w-full"
            style={{ 
              backgroundColor: theme.bgDarker, 
              borderColor: theme.border,
              color: theme.text
            }}
          />
          <input
            type="email"
            placeholder={t.yourEmail}
            className="p-2 rounded border w-full"
            style={{ 
              backgroundColor: theme.bgDarker, 
              borderColor: theme.border,
              color: theme.text
            }}
          />
          <textarea
            placeholder={t.yourMessage}
            rows={4}
            className="p-2 rounded border w-full resize-none"
            style={{ 
              backgroundColor: theme.bgDarker, 
              borderColor: theme.border,
              color: theme.text
            }}
          ></textarea>
          <button
            type="submit"
            className="p-2 rounded font-bold transition-colors"
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