"use client"

import { BookOpen } from "lucide-react"
import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import { Language } from "@/lib/translations"
import { TRANSLATIONS } from "@/lib/translations"

type SkillsSectionProps = {
  theme: typeof THEMES[ThemeName]
  t: typeof TRANSLATIONS[Language]
}

export function SkillsSection({ theme, t }: SkillsSectionProps) {
  const categories = [
    { key: 'frontend', title: t.frontend },
    { key: 'backend', title: t.backend },
    { key: 'tools', title: t.tools },
    { key: 'softSkills', title: t.softSkills }
  ] as const;

  return (
    <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg border" 
      style={{ backgroundColor: theme.bg, borderColor: theme.border }}
    >
      <div className="flex items-center gap-2 mb-3 md:mb-4" style={{ color: theme.accent2 }}>
        <BookOpen size={16} className="md:size-18" />
        <h2 className="text-base md:text-lg font-bold">{t.skillsTitle}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {categories.map((category) => (
          <div 
            key={category.key}
            className="p-2 md:p-3 rounded border" 
            style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
          >
            <h3 className="font-bold mb-1 md:mb-2" style={{ color: theme.accent }}>{category.title}</h3>
            <ul className="list-disc list-inside space-y-0.5 md:space-y-1 text-xs md:text-sm">
              {t.skills[category.key].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}