import { LayersIcon, SparklesIcon, BuildingIcon } from '../icons'
import IconWrap from '../components/IconWrap'

const bundles = [
  {
    icon: LayersIcon,
    title: 'Synapse Foundation',
    subtitle: 'Cortex + Axon Text',
    price: '$999',
    perUser: '+ $99/user',
    badge: 'For SMBs & Startups',
    features: ['Universal KB Library', 'Basic RAG Search', '1.2M+ Knowledge Neurons', 'Pre-wired Vendor Pathways', 'Text Interface Only'],
    cta: 'Get Started',
    primary: false,
  },
  {
    icon: SparklesIcon,
    title: 'Synapse Intelligence',
    subtitle: 'Cortex + Soma Core + Axon Complete',
    price: '$7,999',
    perUser: '+ $79/user',
    badge: 'For Mid-Market Companies',
    features: ['Everything in Foundation', 'Learning Engine (Soma Core)', 'All Interfaces (Axon Complete)', 'Neural Plasticity', 'Pattern Recognition', 'Voice, Chat, Web'],
    cta: 'Get Started',
    primary: true,
    featured: true,
  },
  {
    icon: BuildingIcon,
    title: 'Synapse Enterprise',
    subtitle: 'Full Platform + Predictive',
    price: '$29,999',
    perUser: '+ $59/user',
    badge: 'For Large Enterprises',
    features: ['Everything in Intelligence', 'Predictive Analytics', 'Soma Pro Customization', 'Advanced Pattern Recognition', 'Priority Support', 'SLA Guarantees'],
    cta: 'Contact Sales',
    primary: false,
  },
]

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Pricing</h1>
          <p className="page-subtitle">Choose the neural network that fits your organization</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Bundled Offerings</h2>
          <div className="pricing-grid">
            {bundles.map((b) => (
              <div
                key={b.title}
                className={`pricing-card ${b.featured ? 'pricing-card-featured' : ''}`}
              >
                {b.featured && <div className="featured-badge">Most Popular</div>}
                <div className="pricing-header">
                  <span className="pricing-card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconWrap icon={b.icon} size="xl" />
                  </span>
                  <h3>{b.title}</h3>
                  <p className="pricing-subtitle">{b.subtitle}</p>
                  <div className="pricing-price">
                    <span className="price-amount">{b.price}</span>
                    <span className="price-period">/month</span>
                  </div>
                  <div className="price-per-user">{b.perUser}</div>
                </div>
                <div className="pricing-body">
                  <div className="pricing-badge">{b.badge}</div>
                  <ul className="pricing-features">
                    {b.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href={b.cta === 'Contact Sales' ? 'mailto:support@opensutra.com' : 'mailto:support@opensutra.com'} className={`btn ${b.primary ? 'btn-primary' : 'btn-outline'} btn-block`}>
                    {b.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to build your neural network?</h2>
          <p>Schedule a demo or contact sales for custom enterprise pricing</p>
          <div className="cta-buttons">
            <a href="mailto:support@opensutra.com" className="btn btn-primary btn-large">Request Demo</a>
            <a href="mailto:support@opensutra.com" className="btn btn-outline btn-large">Contact Sales</a>
          </div>
        </div>
      </section>
    </>
  )
}
