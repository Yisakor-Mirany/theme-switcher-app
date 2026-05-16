import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeSwitcher() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext)
  const isDark = currentTheme === 'dark'

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
