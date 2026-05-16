# Global Theme Switcher

A React + Vite application that demonstrates **global theme management** using the React Context API. Users can toggle between light and dark mode; the preference is automatically persisted in `localStorage` so it survives page reloads.

---

## What the project does

- Provides a global `ThemeContext` that exposes the current theme string, theme styles, and a `toggleTheme` function to every component in the tree.
- Renders a header toggle button that switches between **☀️ Light Mode** and **🌙 Dark Mode**.
- Applies a `.light-mode` or `.dark-mode` CSS class to the root layout and uses CSS custom properties (`--bg`, `--text`, `--accent`, …) driven by the active theme, so all colours update in a single render cycle.
- Saves the selected theme name to `localStorage` so the same theme is restored on next visit.

---

## Technologies used

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI library |
| [Vite 5](https://vitejs.dev/) | Build tool / dev server |
| React Context API | Global state management |
| `localStorage` | Theme preference persistence |
| CSS custom properties | Dynamic theming without a CSS-in-JS library |

---

## How to install dependencies

```bash
npm install
```

---

## How to run the app

```bash
# Development server with hot reload
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Key files & components

```
src/
├── main.jsx          # Entry point — wraps <App> in <ThemeProvider>
├── App.jsx           # Root layout; consumes ThemeContext for CSS vars & class
├── App.css           # All styles using CSS custom properties
├── ThemeContext.jsx  # createContext, theme objects, ThemeProvider (useState + localStorage)
└── ThemeSwitcher.jsx # Toggle button — useContext(ThemeContext) → toggleTheme
```

### `ThemeContext.jsx`
Defines two theme objects (`light` / `dark`) and exports:
- `ThemeContext` — the context object passed to `useContext`.
- `ThemeProvider` — a wrapper component that holds the active theme in `useState`, syncs it to `localStorage` via `useEffect`, and exposes `{ currentTheme, theme, themeStyles, toggleTheme }` through the provider value.

### `ThemeSwitcher.jsx`
Reads `currentTheme` and `toggleTheme` from `ThemeContext` via `useContext`. Renders a single button whose label changes based on the current theme.

### `App.jsx`
Reads the active `themeStyles` object and applies its colour values as inline CSS custom properties on the root `<div>`, together with a dynamic `light-mode` / `dark-mode` class. All child elements inherit these variables through the cascade.

---

## GitHub setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

Replace `<YOUR_REPO_URL>` with your actual GitHub repository URL.
