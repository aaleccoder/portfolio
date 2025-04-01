"use client"

import { Globe, PaintBucket } from "lucide-react"
import { ThemeName } from "@/lib/themes"
import { Language } from "@/lib/translations"
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { THEMES } from "@/lib/themes"

type TerminalHeaderProps = {
  activeSection: string
  language: Language
  setLanguage: (lang: Language) => void
  currentTheme: ThemeName
  setCurrentTheme: (theme: ThemeName) => void
  theme: typeof THEMES[ThemeName]
}

export function TerminalHeader({
  activeSection,
  language,
  setLanguage,
  currentTheme,
  setCurrentTheme,
  theme
}: TerminalHeaderProps) {
  return (
    <div 
      className="flex items-center justify-between" 
      style={{ backgroundColor: theme.bgLighter, borderBottom: `1px solid ${theme.border}` }}
    >
      <div className="flex items-center gap-2 p-2 rounded-t-lg">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#fb4934" }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#fabd2f" }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#b8bb26" }}></div>
        <span className="ml-2 text-sm">terminal@portfolio ~ {activeSection}</span>
      </div>
      
      <div className="flex items-center gap-2 p-2">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger 
            className="flex items-center gap-1 p-1 rounded hover:bg-opacity-20" 
            style={{ backgroundColor: `${theme.bgLighter}`, color: theme.link }}
          >
            <Globe size={16} />
            <span className="text-xs">{language.toUpperCase()}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLanguage("en")}>
              English (EN)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("es")}>
              Español (ES)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger 
            className="flex items-center gap-1 p-1 rounded hover:bg-opacity-20" 
            style={{ backgroundColor: `${theme.bgLighter}`, color: theme.link }}
          >
            <PaintBucket size={16} />
            <span className="text-xs">{theme.name}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.entries(THEMES).map(([key, themeValue]) => (
              <DropdownMenuItem 
                key={key}
                onClick={() => setCurrentTheme(key as ThemeName)}
              >
                {themeValue.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}