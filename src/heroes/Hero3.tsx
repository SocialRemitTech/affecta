import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero3() {
  return (
    <section className="hero3" id="top">
      <div className="hero3-left">
        <div className="hero3-eyebrow"><Sparkles size={15} /> A new financial future is taking shape</div>
        <h1 className="hero3-title">
          Finance<br />
          that <span>feels</span><br />
          human.
        </h1>
        <p className="hero3-sub">
          Affecta Technologies is building the first Emotional Finance Infrastructure™
          for the Global South — designed from lived experience, not theory.
        </p>

        <div className="hero3-launch">
          <span className="hero3-pulse" aria-hidden="true" />
          Launching soon
        </div>

        <div className="hero3-actions">
          <a className="hero3-btn" href="mailto:hello@affecta.tech?subject=I%20want%20to%20follow%20Affecta">
            Stay connected <ArrowUpRight size={18} />
          </a>
          <a className="hero3-link" href="mailto:hello@affecta.tech">Get in touch</a>
        </div>
      </div>

      <div className="hero3-right">
        <div className="hero3-img-frame">
          <img src="/image.png" alt="Affecta Financial Technology" />
          <div className="hero3-img-label">Affecta Financial Technology</div>
        </div>
        <div className="hero3-quote">
          “Where algorithmic finance ends, <span>emotional finance begins.</span>”
        </div>
      </div>
    </section>
  );
}
