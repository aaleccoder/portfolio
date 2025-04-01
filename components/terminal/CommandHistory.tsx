"use client"

import { cn } from "@/lib/utils"
import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"

type CommandHistoryProps = {
  commandHistory: string[]
  theme: typeof THEMES[ThemeName]
}

export function CommandHistory({ commandHistory, theme }: CommandHistoryProps) {
  return (
    <div className="mb-4">
      {commandHistory.map((line, index) => (
        <div
          key={index}
          className={cn("whitespace-pre-wrap mb-1")}
          style={{ color: line.startsWith("$") ? theme.accent : theme.text }}
        >
          {line}
        </div>
      ))}
    </div>
  )
}