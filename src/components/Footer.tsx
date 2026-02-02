import { Link } from 'react-router-dom'
import MobiusLogo from './MobiusLogo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <MobiusLogo size={32} transparent />
              <span className="brand-name">Synapse</span>
            </div>
            <p className="footer-tagline">Where IT knowledge connects and fires</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Products</h4>
              <ul>
                <li><Link to="/products#cortex">Cortex</Link></li>
                <li><Link to="/products#soma">Soma</Link></li>
                <li><Link to="/products#axon">Axon</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/release">Release</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Opensutra, LLC | 2010-2026. Building the nervous system for enterprise IT.</p>
        </div>
      </div>
    </footer>
  )
}
