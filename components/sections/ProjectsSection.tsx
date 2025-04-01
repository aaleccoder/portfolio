"use client"

import { Code, Github, ExternalLink } from "lucide-react"
import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import { Language } from "@/lib/translations"
import { TRANSLATIONS } from "@/lib/translations"

type ProjectsProps = {
  theme: typeof THEMES[ThemeName]
  t: typeof TRANSLATIONS[Language]
}

export function ProjectsSection({ theme, t }: ProjectsProps) {
  return (
    <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg border" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
      <div className="flex items-center gap-2 mb-3 md:mb-4" style={{ color: theme.accent2 }}>
        <Code size={16} className="md:size-18" />
        <h2 className="text-base md:text-lg font-bold">{t.projectsTitle}</h2>
      </div>

      <div className="grid gap-3 md:gap-4">
        {t.projects.map((project, index) => (
          <div 
            key={index} 
            className="p-2 md:p-3 rounded border" 
            style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
          >
            <h3 className="font-bold mb-1" style={{ color: theme.accent }}>{project.title}</h3>
            <p className="text-xs md:text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
                style={{ color: theme.link }}
              >
                <Github size={12} className="md:size-14" />
                {t.repository}
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
                style={{ color: theme.link }}
              >
                <ExternalLink size={12} className="md:size-14" />
                {t.liveDemo}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}