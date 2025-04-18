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
  inputRef: React.RefObject<HTMLInputElement>
}

export function CommandInput({
  commandInput,
  setCommandInput,
  handleCommandSubmit,
  showCursor,
  theme,
  inputRef
}: CommandInputProps) {
  return (
    <form onSubmit={handleCommandSubmit} className="flex items-center">
      <span style={{ color: theme.accent }} className="mr-2">$</span>
      <input
        ref={inputRef}
        type="text"
        value={commandInput}
        onChange={(e) => setCommandInput(e.target.value)}
        className="flex-1 outline-none border-none bg-transparent caret-transparent"
        style={{ color: theme.text }}
        autoComplete="off"
        spellCheck="false"
      />
      <span 
        className={cn("ml-0.5 w-2 h-5", showCursor ? "opacity-100" : "opacity-0")}
        style={{ backgroundColor: theme.text }}
      ></span>
    </form>
  )
}