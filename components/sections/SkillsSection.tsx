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
  return (
    <div className="mt-6 p-4 rounded-lg border" 
      style={{ backgroundColor: theme.bg, borderColor: theme.border }}
    >
      <div className="flex items-center gap-2 mb-4" style={{ color: theme.accent2 }}>
        <BookOpen size={18} />
        <h2 className="text-lg font-bold">{t.skillsTitle}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 rounded border" 
          style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
        >
          <h3 className="font-bold mb-2" style={{ color: theme.accent }}>{t.frontend}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>React / Next.js</li>
            <li>TypeScript / JavaScript</li>
            <li>HTML5 / CSS3</li>
            <li>Tailwind CSS / SCSS</li>
            <li>Redux / Context API</li>
          </ul>
        </div>

        <div className="p-3 rounded border" 
          style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
        >
          <h3 className="font-bold mb-2" style={{ color: theme.accent }}>{t.backend}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Node.js / Express</li>
            <li>RESTful APIs</li>
            <li>MongoDB / PostgreSQL</li>
            <li>Firebase / Supabase</li>
            <li>GraphQL</li>
          </ul>
        </div>

        <div className="p-3 rounded border" 
          style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
        >
          <h3 className="font-bold mb-2" style={{ color: theme.accent }}>{t.tools}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Git / GitHub</li>
            <li>Docker</li>
            <li>CI/CD Pipelines</li>
            <li>Jest / Testing Library</li>
            <li>Figma / Adobe XD</li>
          </ul>
        </div>

        <div className="p-3 rounded border" 
          style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
        >
          <h3 className="font-bold mb-2" style={{ color: theme.accent }}>{t.softSkills}</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Project Management</li>
            <li>Technical Writing</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}