import { ArrowUpRight, TrendingUp, Users, Globe2 } from 'lucide-react';

export default function Hero1() {
  return (
    <section className="hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="hero-copy">
        <div className="eyebrow">A new financial future is taking shape</div>
        <h1>Finance that<br /><em>feels human.</em></h1>
        <p className="hero-intro">
          Affecta Technologies is building the first Emotional Finance Infrastructure™ for the Global South.
        </p>
        <div className="launch-banner">
          <span className="launch-pulse" aria-hidden="true" />
          <span className="launch-text">Launching soon</span>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="mailto:hello@affecta.tech?subject=I%20want%20to%20follow%20Affecta">
            <span className="primary-button-label">Stay connected <ArrowUpRight size={18} /></span>
            <span className="primary-button-shine" aria-hidden="true" />
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><Users size={18} /><strong>4.5B</strong><span>underserved</span></div>
          <div className="hero-stat"><Globe2 size={18} /><strong>Global South</strong><span>first</span></div>
          <div className="hero-stat"><TrendingUp size={18} /><strong>2026</strong><span>launching</span></div>
        </div>
      </div>

      <div className="hero-art" aria-label="Affecta Financial Technology">
        <div className="art-ring ring-one" />
        <div className="art-ring ring-two" />
        <div className="art-ring ring-three" />
        <div className="art-card">
          <div className="art-topline"><span>01</span><span>Financial Technology</span></div>
          <div className="art-word">Affecta<span className="word-dot">.</span></div>
          <div className="art-tagline">Emotional Finance Infrastructure</div>
          <div className="art-bottomline"><span>Infrastructure for belonging</span><span>2026 — ∞</span></div>
        </div>
        <div className="floating-chip chip-one">Human-first</div>
        <div className="floating-chip chip-two">Global South</div>
      </div>
    </section>
  );
}
