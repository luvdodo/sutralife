import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import MobiusLogo from './MobiusLogo'

const navLinks = [
  { to: '/', label: 'Overview' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/release', label: 'Release' },
]

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">
            <MobiusLogo size={40} transparent />
            <span className="brand-name">Synapse</span>
          </Link>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={location.pathname === to ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }} />
        </button>
      </div>
    </nav>
  )
}
