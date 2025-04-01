export const THEMES = {
  gruvbox: {
    name: "Gruvbox",
    bg: "#282828",
    bgDarker: "#1d2021",
    bgLighter: "#3c3836",
    border: "#504945",
    text: "#ebdbb2",
    accent: "#b8bb26",
    accent2: "#fabd2f",
    link: "#83a598"
  },
  monokai: {
    name: "Monokai",
    bg: "#272822",
    bgDarker: "#1e1f1c",
    bgLighter: "#3e3d32",
    border: "#49483e",
    text: "#f8f8f2",
    accent: "#a6e22e",
    accent2: "#fd971f",
    link: "#66d9ef"
  },
  oneDark: {
    name: "One Dark Pro",
    bg: "#282c34",
    bgDarker: "#21252b",
    bgLighter: "#3a404b",
    border: "#5c6370",
    text: "#abb2bf",
    accent: "#98c379",
    accent2: "#e5c07b",
    link: "#61afef"
  },
  dracula: {
    name: "Dracula",
    bg: "#282a36",
    bgDarker: "#1e1f29",
    bgLighter: "#44475a",
    border: "#6272a4",
    text: "#f8f8f2",
    accent: "#50fa7b",
    accent2: "#ffb86c",
    link: "#8be9fd"
  }
}

export type ThemeName = keyof typeof THEMES;