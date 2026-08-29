import { useReveal } from '../hooks/useReveal';

export function FinalCTA() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="final reveal" id="cta" ref={revealRef}>
      <div className="wrap">
        <h2>
          Stop refreshing.
          <br />
          <span className="accent">Start front-running the timeline.</span>
        </h2>
        <p>Start using FOMO Twitter Tracker and never watch a runner leave without you again.</p>
        <a className="btn btn-primary" href="#use" style={{ padding: '18px 36px', fontSize: '17px' }}>
          FOMO Twitter Tracker <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
