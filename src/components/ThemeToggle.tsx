import { MoonIcon, SunIcon } from '../icons'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      <MoonIcon className="theme-icon theme-icon-dark" size={20} aria-hidden />
      <SunIcon className="theme-icon theme-icon-light" size={20} aria-hidden />
    </button>
  )
}
