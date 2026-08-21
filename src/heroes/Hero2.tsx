import { ArrowUpRight, Sparkles, TrendingUp, Users, Globe2 } from 'lucide-react';

export default function Hero2() {
  return (
    <section className="hero2" id="top">
      <div className="hero2-bg" aria-hidden="true">
        <div className="hero2-glow glow-a" />
        <div className="hero2-glow glow-b" />
        <div className="hero2-grid" />
      </div>

      <div className="hero2-content">
        <div className="hero2-badge"><Sparkles size={14} /> Coming soon</div>
        <h1 className="hero2-title">
          Finance that<br />
          <span className="hero2-gradient">feels human.</span>
        </h1>
        <p className="hero2-sub">
          Affecta Technologies is building the first Emotional Finance Infrastructure™
          for the Global South — designed from lived experience, not theory.
        </p>

        <div className="hero2-actions">
          <a className="hero2-btn" href="mailto:hello@affecta.tech?subject=I%20want%20to%20follow%20Affecta">
            Stay connected <ArrowUpRight size={18} />
          </a>
          <a className="hero2-ghost" href="mailto:hello@affecta.tech">Get in touch</a>
        </div>

        <div className="hero2-stats">
          <div className="hero2-stat">
            <Users size={20} />
            <div>
              <strong>4.5B</strong>
              <span>underserved people</span>
            </div>
          </div>
          <div className="hero2-stat">
            <Globe2 size={20} />
            <div>
              <strong>Global South</strong>
              <span>first infrastructure</span>
            </div>
          </div>
          <div className="hero2-stat">
            <TrendingUp size={20} />
            <div>
              <strong>2026</strong>
              <span>launching soon</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero2-visual" aria-label="Affecta Financial Technology">
        <div className="hero2-panel">
          <div className="hero2-panel-head">
            <span>Affecta</span>
            <span className="hero2-dot" />
          </div>
          <div className="hero2-panel-img"><img src="/image.png" alt="Affecta Financial Technology" /></div>
          <div className="hero2-panel-foot">
            <span>Emotional Finance Infrastructure™</span>
            <span>v1.0</span>
          </div>
        </div>
        <div className="hero2-float hero2-float-a">Human-first</div>
        <div className="hero2-float hero2-float-b">Fair · Inclusive</div>
      </div>
    </section>
  );
}
