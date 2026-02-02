const timeline = [
  { date: 'Q3 2025', title: 'Alpha Release', status: 'completed', desc: 'Initial release with Synapse Cortex foundation. Core knowledge library with 50K+ neurons from major IT vendors.', features: ['Synapse Cortex Starter & Professional', 'Basic RAG search (Axon Text)', 'MCP integration'] },
  { date: 'Q4 2025 - Current', title: 'Beta Release', status: 'current', desc: 'Expanded platform with learning capabilities and multiple interfaces. Active beta program with 50+ companies.', features: ['Synapse Soma Lite & Core', 'Axon Voice & Pulse interfaces', 'Neural plasticity engine', 'Pattern recognition', '1.2M+ knowledge neurons'] },
  { date: 'Q1 2026', title: 'General Availability', status: 'upcoming', desc: "The nervous system for enterprise IT is now available. Start building your organization's neural network today.", features: ['Full product suite available', 'Synapse Soma Pro', 'Axon Complete bundle', 'All add-on modules', 'Enterprise & Sovereign tiers'] },
  { date: 'Q2 2026', title: 'Predictive Intelligence', status: 'upcoming', desc: 'Advanced predictive analytics and automated remediation. The platform learns to prevent problems before they happen.', features: ['Synapse Soma Predictive', 'Synapse Cerebellum (automation)', 'Synapse Amygdala (risk detection)', 'Advanced neural pathways'] },
]

const updates = [
  { date: 'January 8, 2026', title: 'Enhanced Pattern Recognition', desc: 'Synapse Soma Core now includes advanced pattern recognition that clusters similar incidents automatically, helping teams identify root causes faster.', tags: ['Soma', 'AI'] },
  { date: 'December 20, 2025', title: 'ServiceNow Integration (Dendrite)', desc: 'Synapse Dendrite for ServiceNow is now available. Connect your ServiceNow instance to receive real-time knowledge signals.', tags: ['Integration', 'Dendrite'] },
  { date: 'December 5, 2025', title: 'Knowledge Base Expansion', desc: 'Synapse Cortex now includes 100,000+ knowledge neurons, covering all major IT vendors and platforms. Constant synaptic growth keeps everything current.', tags: ['Cortex', 'Knowledge'] },
  { date: 'November 1, 2025', title: 'Beta Program Launch', desc: "Synapse enters beta with 25 founding companies. The neural network is forming, and we're learning from every interaction.", tags: ['Beta', 'Launch'] },
]

const roadmap = [
  { quarter: 'Q1 2026', title: 'General Availability', items: ['Full product suite launch', 'Enterprise tier availability', 'Self-service onboarding', 'Public API release'] },
  { quarter: 'Q2 2026', title: 'Predictive Intelligence', items: ['Predictive analytics engine', 'Automated remediation', 'Risk detection & alerting', 'Advanced neural pathways'] },
  { quarter: 'Q3 2026', title: 'Advanced Integrations', items: ['Jira & PagerDuty Dendrites', 'Custom integration framework', 'Webhook system', 'API marketplace'] },
  { quarter: 'Q4 2026', title: 'AI Enhancements', items: ['Multi-modal AI models', 'Advanced natural language processing', 'Contextual understanding', 'Autonomous learning'] },
]

export default function Release() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Release & Updates</h1>
          <p className="page-subtitle">Stay connected with the latest neural network developments</p>
        </div>
      </section>

      <section className="status-section">
        <div className="container">
          <div className="status-card">
            <div className="status-badge status-badge-beta">Beta</div>
            <h2>Synapse is in Beta</h2>
            <p className="status-description">
              Your organization&apos;s neural network is forming. Join the first 100 companies
              building living IT intelligence. We&apos;re actively onboarding early adopters
              and refining the platform based on real-world usage.
            </p>
            <div className="status-stats">
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">1.2M+</div>
                <div className="stat-label">Knowledge Neurons</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">10M+</div>
                <div className="stat-label">Neural Queries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Release Timeline</h2>
          <div className="timeline">
            {timeline.map((t) => (
              <div key={t.date + t.title} className={`timeline-item timeline-item-${t.status}`}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-date">{t.date}</div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <ul className="timeline-features">
                    {t.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="updates-section">
        <div className="container">
          <h2 className="section-title">Recent Updates</h2>
          <div className="updates-grid">
            {updates.map((u) => (
              <article key={u.date + u.title} className="update-card">
                <div className="update-date">{u.date}</div>
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
                <div className="update-tags">
                  {u.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap-section">
        <div className="container">
          <h2 className="section-title">Roadmap</h2>
          <div className="roadmap-grid">
            {roadmap.map((r) => (
              <div key={r.quarter} className="roadmap-item">
                <div className="roadmap-quarter">{r.quarter}</div>
                <h3>{r.title}</h3>
                <ul>
                  {r.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="beta-cta-section">
        <div className="container">
          <div className="beta-cta-card">
            <h2>Join the Beta Program</h2>
            <p>Be among the first to experience the neural network for IT operations. Limited spots available for early adopters.</p>
            <div className="beta-benefits">
              {['Early access to new features', 'Direct feedback channel to product team', 'Special beta pricing', 'Priority support'].map((benefit) => (
                <div key={benefit} className="beta-benefit">
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <a href="mailto:support@opensutra.com" className="btn btn-primary btn-large">Apply for Beta Access</a>
          </div>
        </div>
      </section>
    </>
  )
}
