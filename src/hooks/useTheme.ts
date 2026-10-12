/**
 * Dark-mode hook (React state + Tailwind).
 * Toggling adds/removes the `dark` class on <html>, which flips every colour
 * token in index.css at once. The choice is saved in localStorage, and
 * index.html applies it before first paint to avoid a white flash.
 */
import { useCallback, useEffect, useState } from "react"

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem("theme", theme)
    } catch {
      /* storage unavailable — ignore */
    }
  }, [theme])

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  )

  return { theme, toggle }
}
