import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import Hero1 from '@/heroes/Hero1';
import Hero2 from '@/heroes/Hero2';
import Hero3 from '@/heroes/Hero3';

const HEROES = [
  { id: 1, name: 'Hero 01', label: 'Editorial card' },
  { id: 2, name: 'Hero 02', label: 'Dark modern' },
  { id: 3, name: 'Hero 03', label: 'Editorial split' },
] as const;

function App() {
  const [active, setActive] = useState<number>(1);

  return (
    <div>
      <div className="hero-switcher" aria-label="Choose hero design">
        <span className="hero-switcher-label">Compare designs</span>
        {HEROES.map((h) => (
          <button
            key={h.id}
            className={`hero-switcher-btn${active === h.id ? ' is-active' : ''}`}
            onClick={() => setActive(h.id)}
            aria-pressed={active === h.id}
          >
            <span>{h.name}</span>
            <small>{h.label}</small>
          </button>
        ))}
      </div>

      <main className="site-shell">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />

        <nav className="topbar" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Affecta Technologies home">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-name">Affecta</span>
          </a>
          <a className="nav-link" href="mailto:hello@affecta.tech">
            Get in touch <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
        </nav>

        {active === 1 && <Hero1 />}
        {active === 2 && <Hero2 />}
        {active === 3 && <Hero3 />}

        <section className="manifesto" aria-label="Affecta's mission and vision">
          <div className="manifesto-heading">
            <h2>Built from lived<br /><span>experience,</span> not theory.</h2>
          </div>
          <div className="manifesto-body">
            <div className="statement">
              <span className="statement-label">Our mission</span>
              <p>Building the first Emotional Finance Infrastructure™ for the Global South — designed from lived experience, not theory.</p>
            </div>
            <div className="statement">
              <span className="statement-label">Our vision</span>
              <p>To give 4.5 billion underserved people the tools, intelligence, and infrastructure to participate <strong>fairly</strong> and confidently in the global economy.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-quote">“Where algorithmic finance ends,<br /><span>emotional finance begins.</span>”</div>
          <a className="email-link" href="mailto:hello@affecta.tech"><Mail size={17} /> hello@affecta.tech</a>
          <span className="copyright">© 2026 Affecta Technology Ltd.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
