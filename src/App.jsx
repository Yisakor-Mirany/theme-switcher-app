import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'
import './App.css'

export default function App() {
  const { themeName, theme } = useContext(ThemeContext)

  return (
    <div
      className={`app-layout ${themeName}-mode`}
      style={{
        '--bg': theme.background,
        '--surface': theme.surface,
        '--text': theme.text,
        '--subtext': theme.subtext,
        '--border': theme.border,
        '--accent': theme.accent,
        '--accent-hover': theme.accentHover,
        '--shadow': theme.shadow,
      }}
    >
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-icon">🎨</span>
            <span className="brand-name">ThemeSwitcher</span>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      <main className="app-main">
        <section className="hero">
          <h1 className="hero-title">Global Theme Switcher</h1>
          <p className="hero-subtitle">
            A React Context API demo that persists your preferred theme across
            sessions using <code>localStorage</code>.
          </p>
        </section>

        <section className="cards">
          <div className="card">
            <div className="card-icon">⚛️</div>
            <h2>React Context API</h2>
            <p>
              Theme state lives in <code>ThemeContext</code> and is consumed by
              any component in the tree — no prop drilling required.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">💾</div>
            <h2>localStorage Persistence</h2>
            <p>
              Your preference is saved automatically so the same theme is
              restored the next time you open the app.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">⚡</div>
            <h2>Vite + React</h2>
            <p>
              Built with Vite for instant HMR and blazing-fast production
              builds. All components use <code>.jsx</code> files.
            </p>
          </div>
        </section>

        <section className="palette-section">
          <h2 className="section-title">Current Palette</h2>
          <div className="palette">
            {[
              ['Background', 'var(--bg)'],
              ['Surface', 'var(--surface)'],
              ['Text', 'var(--text)'],
              ['Accent', 'var(--accent)'],
              ['Border', 'var(--border)'],
            ].map(([label, color]) => (
              <div key={label} className="swatch-wrapper">
                <div className="swatch" style={{ background: color }} />
                <span className="swatch-label">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Global Theme Switcher &mdash; built with React {' '}
          <span aria-hidden="true">+</span> Vite
        </p>
      </footer>
    </div>
  )
}
