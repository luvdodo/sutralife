import { Link } from 'react-router-dom'
import {
  BookIcon,
  ZapIcon,
  RefreshIcon,
  BrainIcon,
  ActivityIcon,
  PackageIcon,
  LayoutGridIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  BuildingIcon,
} from '../icons'
import IconWrap from '../components/IconWrap'

const features = [
  { icon: BookIcon, title: 'Universal Knowledge Base', desc: 'One neural library for all IT knowledge. Pre-wired with 1.2M+ articles from major vendors, always current.' },
  { icon: ZapIcon, title: 'Instant Retrieval', desc: 'RAG-powered search returns the right answer in seconds. No more digging through wikis or waiting on experts.' },
  { icon: RefreshIcon, title: 'Synaptic Updates', desc: 'Knowledge stays current automatically. New articles, patches, and runbooks flow in without manual curation.' },
  { icon: BrainIcon, title: 'Neural Plasticity', desc: 'The system learns from every interaction. Resolved incidents strengthen the knowledge base for next time.' },
  { icon: ActivityIcon, title: 'Real-Time Learning', desc: 'Every incident resolution strengthens the knowledge base. Patterns are recognized automatically and applied instantly.' },
  { icon: PackageIcon, title: 'Vendor Integration', desc: 'Pre-wired with 1.2 million+ articles from major IT vendors. Auto-updates keep your knowledge current without manual maintenance.' },
  { icon: LayoutGridIcon, title: 'Multi-Modal Access', desc: 'Access knowledge through text search, voice commands, chat interfaces, web portals, or mobile apps—whatever your team prefers.' },
  { icon: TrendingUpIcon, title: 'Predictive Analytics', desc: 'Identify trends and predict issues before they impact operations. Build models that prevent problems proactively.' },
  { icon: ShieldCheckIcon, title: 'Enterprise Security', desc: 'SOC 2 compliant with role-based access control, audit logs, and data encryption. Built for regulated industries.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              The nervous system for enterprise IT
            </h1>
            <p className="hero-subtitle">
              Synapse turns scattered knowledge into a living neural network, so every incident gets the right answer instantly.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary btn-large">Explore Products</Link>
              <Link to="/pricing" className="btn btn-secondary btn-large">View Pricing</Link>
            </div>
            <div className="hero-metrics">
              <div className="hero-metric">
                <div className="hero-metric-icon">
                  <IconWrap icon={DatabaseIcon} size="lg" />
                </div>
                <div className="metric-number">1.2M+</div>
                <div className="metric-label">Knowledge Neurons</div>
              </div>
              <div className="hero-metric">
                <div className="hero-metric-icon">
                  <IconWrap icon={ZapIcon} size="lg" />
                </div>
                <div className="metric-number">40x</div>
                <div className="metric-label">Faster Resolution</div>
              </div>
              <div className="hero-metric">
                <div className="hero-metric-icon">
                  <IconWrap icon={BuildingIcon} size="lg" />
                </div>
                <div className="metric-number">50+</div>
                <div className="metric-label">Beta Companies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="value-prop">
        <div className="container">
          <div className="value-content">
            <h2>Stop Losing Institutional Knowledge</h2>
            <p className="value-statement">
              Your IT team's collective intelligence is scattered across hundreds of people, Slack threads, and forgotten tickets.
              Synapse captures, organizes, and makes this knowledge instantly accessible, turning every incident into organizational wisdom.
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Synapse</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card feature-card-centered">
                <div className="feature-icon">
                  <IconWrap icon={f.icon} size="lg" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to build your neural network?</h2>
          <p>Join the beta or schedule a demo to see Synapse in action.</p>
          <div className="cta-buttons">
            <Link to="/pricing" className="btn btn-primary btn-large">View Pricing</Link>
            <Link to="/products" className="btn btn-secondary btn-large">Explore Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
