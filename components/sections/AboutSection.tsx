"use client"

import { User } from "lucide-react"
import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import { Language } from "@/lib/translations"
import { TRANSLATIONS } from "@/lib/translations"

type AboutSectionProps = {
  theme: typeof THEMES[ThemeName]
  t: typeof TRANSLATIONS[Language]
}

export function AboutSection({ theme, t }: AboutSectionProps) {
  return (
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
  )
}