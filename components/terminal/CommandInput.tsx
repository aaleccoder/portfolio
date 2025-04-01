"use client"

import { cn } from "@/lib/utils"
import { ThemeName } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import React from "react"

type CommandInputProps = {
  commandInput: string
  setCommandInput: (value: string) => void
  handleCommandSubmit: (e: React.FormEvent) => void
  showCursor: boolean
  theme: typeof THEMES[ThemeName]
}

export function CommandInput({
  commandInput,
  setCommandInput,
  handleCommandSubmit,
  showCursor,
  theme
}: CommandInputProps) {
  return (
    <form onSubmit={handleCommandSubmit} className="flex items-center">
      <span style={{ color: theme.accent }} className="mr-2">$</span>
      <input
        type="text"
        value={commandInput}
        onChange={(e) => setCommandInput(e.target.value)}
        className="flex-1 outline-none border-none"
        style={{ backgroundColor: "transparent", color: theme.text }}
        autoFocus
      />
    </form>
  )
}