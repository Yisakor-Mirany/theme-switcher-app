import { createContext, useState, useEffect } from 'react'

export const themes = {
  light: {
    name: 'light',
    background: '#f5f7fa',
    surface: '#ffffff',
    text: '#1a1a2e',
    subtext: '#555577',
    border: '#dde1f0',
    accent: '#4f46e5',
    accentHover: '#4338ca',
    shadow: 'rgba(0, 0, 0, 0.08)',
  },
  dark: {
    name: 'dark',
    background: '#0f0f1a',
    surface: '#1a1a2e',
    text: '#e8e8f0',
    subtext: '#9999bb',
    border: '#2e2e4a',
    accent: '#7c3aed',
    accentHover: '#6d28d9',
    shadow: 'rgba(0, 0, 0, 0.4)',
  },
}

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = () => {
    setThemeName(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ themeName, theme: themes[themeName], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
