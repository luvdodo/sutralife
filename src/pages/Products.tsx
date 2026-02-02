import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  DatabaseIcon,
  BrainIcon,
  ZapIcon,
  SearchIcon,
  MicIcon,
  MessageCircleIcon,
  GlobeIcon,
  GitBranchIcon,
  HardDriveIcon,
  WorkflowIcon,
  ShieldAlertIcon,
} from '../icons'
import IconWrap from '../components/IconWrap'
import CardSwap from '../components/CardSwap'

const mainProducts = [
  {
    id: 'cortex',
    icon: DatabaseIcon,
    title: 'Synapse Cortex',
    subtitle: 'Universal KB Library via MCP',
    badge: 'Foundation Layer',
    description: 'The cortical layer of vendor knowledge. 1.2M+ pre-wired KB articles, auto-updates, universal foundation.',
    tiers: ['Cortex Starter', 'Cortex Professional', 'Cortex Enterprise', 'Cortex Sovereign'],
  },
  {
    id: 'soma',
    icon: BrainIcon,
    title: 'Synapse Soma',
    subtitle: 'Self-Learning Customization Engine',
    badge: 'Learning Center',
    description: "Your organization's learning center. Neural plasticity, pattern recognition, synaptic strengthening, memory consolidation.",
    tiers: ['Soma Lite', 'Soma Core', 'Soma Pro', 'Soma Predictive'],
  },
  {
    id: 'axon',
    icon: ZapIcon,
    title: 'Synapse Axon',
    subtitle: 'Multi-Modal Access Layer',
    badge: 'Transmission Layer',
    description: 'Instant knowledge transmission, any interface. RAG search, voice, Slack/Teams, web portal, mobile apps.',
    tiers: [],
  },
]

const interfaces = [
  { icon: SearchIcon, name: 'Axon Text', desc: 'RAG search interface for instant knowledge retrieval' },
  { icon: MicIcon, name: 'Axon Voice', desc: 'Voice interface for hands-free knowledge access' },
  { icon: MessageCircleIcon, name: 'Axon Pulse', desc: 'Slack/Teams bot for team collaboration' },
  { icon: GlobeIcon, name: 'Axon Web', desc: 'React portal for web-based access' },
]

const addons = [
  { icon: GitBranchIcon, name: 'Synapse Dendrite', subtitle: 'Incoming Integrations', desc: 'ServiceNow, Jira, PagerDuty integrations. Dendrites receive signals from external sources.', price: '$1,999/month per integration' },
  { icon: ZapIcon, name: 'Synapse Myelin', subtitle: 'Performance Acceleration', desc: 'Caching and optimization layer. Myelin-coated queries respond 10x faster.', price: '$4,999/month' },
  { icon: HardDriveIcon, name: 'Synapse Hippocampus', subtitle: 'Long-Term Memory & Analytics', desc: 'Converts short-term to long-term memory. Advanced analytics and historical insights.', price: '$2,999/month' },
  { icon: WorkflowIcon, name: 'Synapse Cerebellum', subtitle: 'Automation & Orchestration', desc: 'Coordinates automatic movements. Auto-remediation and workflow automation.', price: '$5,999/month' },
  { icon: ShieldAlertIcon, name: 'Synapse Amygdala', subtitle: 'Risk Detection & Alerting', desc: 'Threat detection and emotional responses. Predictive alerts and anomaly detection.', price: '$3,999/month' },
]

export default function Products() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Three-Tier Model Products</h1>
          <p className="page-subtitle">The neural architecture for enterprise IT knowledge</p>
        </div>
      </section>

      {/* Card-swap product cards – reactbits style */}
      <section className="product-section">
        <div className="container">
          <div className="card-swap-grid">
            {mainProducts.map((p) => (
              <div key={p.id} id={p.id} style={{ scrollMarginTop: 100 }}>
              <CardSwap
                key={p.id}
                className="product-card-swap"
                front={
                  <>
                    <span className="product-header-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconWrap icon={p.icon} size="xl" />
                    </span>
                    <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', marginBottom: 4 }}>{p.title}</h2>
                    <p className="product-subtitle" style={{ margin: 0 }}>{p.subtitle}</p>
                    <span className="product-badge">{p.badge}</span>
                  </>
                }
                back={
                  <>
                    <div className="card-swap-back-content">
                      {p.id !== 'axon' && <p className="card-swap-description">{p.description}</p>}
                      {p.id === 'axon' && (
                        <div className="card-swap-interfaces" style={{ width: '100%', marginTop: 8, textAlign: 'left' }}>
                          <h4 style={{ fontSize: 11, marginBottom: 4, color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Available Interfaces</h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 11, lineHeight: 1.4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {interfaces.map(({ icon, name, desc }) => (
                              <li key={name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span style={{ flexShrink: 0 }}><IconWrap icon={icon} size="sm" /></span>
                                <span><strong>{name}</strong> — {desc}</span>
                              </li>
                            ))}
                          </ul>
                          <p style={{ fontSize: 10, marginTop: 6, color: 'var(--text-secondary)' }}><strong>Bundle:</strong> Synapse Axon Complete</p>
                        </div>
                      )}
                    </div>
                    <Link to="/pricing" className="btn btn-primary">View Pricing</Link>
                  </>
                }
              />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons with CardSwap */}
      <section className="addons-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Feature Modules (Add-ons)</h2>
            <p className="section-subtitle">Enhance your neural network with specialized modules</p>
          </div>
          <div className="addons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-6)' }}>
            {addons.map((a) => (
              <CardSwap
                key={a.name}
                front={
                  <>
                    <span className="addon-icon" style={{ display: 'flex', margin: '0 auto 16px' }}>
                      <IconWrap icon={a.icon} size="md" />
                    </span>
                    <h3>{a.name}</h3>
                    <p className="addon-subtitle">{a.subtitle}</p>
                    <div className="addon-price">{a.price}</div>
                  </>
                }
                back={
                  <>
                    <div className="card-swap-back-content">
                      <p className="card-swap-description">{a.desc}</p>
                    </div>
                    <Link to="/pricing" className="btn btn-primary">View Pricing</Link>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to build your neural network?</h2>
          <p>Choose the products that fit your organization&apos;s needs</p>
          <div className="cta-buttons">
            <Link to="/pricing" className="btn btn-primary btn-large">View Pricing</Link>
            <Link to="/" className="btn btn-outline btn-large">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}
