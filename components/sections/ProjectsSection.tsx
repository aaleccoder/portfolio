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
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
      repo: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description:
        "A React-based task management application with drag-and-drop functionality and local storage.",
      repo: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that fetches and displays weather data from multiple APIs.",
      repo: "https://github.com/username/weather-app",
      demo: "https://weather-app-demo.vercel.app",
    },
  ]

  return (
    <div className="mt-6 p-4 rounded-lg border" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
      <div className="flex items-center gap-2 mb-4" style={{ color: theme.accent2 }}>
        <Code size={18} />
        <h2 className="text-lg font-bold">{t.projectsTitle}</h2>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-3 rounded border" 
            style={{ backgroundColor: theme.bgLighter, borderColor: theme.border }}
          >
            <h3 className="font-bold mb-1" style={{ color: theme.accent }}>{project.title}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <div className="flex gap-4 text-sm">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
                style={{ color: theme.link }}
              >
                <Github size={14} />
                {t.repository}
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
                style={{ color: theme.link }}
              >
                <ExternalLink size={14} />
                {t.liveDemo}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}