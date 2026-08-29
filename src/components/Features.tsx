import { FEATURES } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Features() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id="features" ref={revealRef}>
      <div className="wrap">
        <div className="kicker reveal">01 / features</div>
        <h2 className="sec-title reveal">Built for speed, tuned for degens</h2>
        <p className="sec-sub reveal">
          Every millisecond between the tweet and your fill is money left on the table. FOMO Twitter Tracker closes
          that gap.
        </p>

        <div className="grid">
          {FEATURES.map((feature, index) => (
            <div
              className={`feature${feature.wide ? ' wide' : ''} reveal`}
              data-i={index}
              key={feature.title}
            >
              {feature.stat && <span className="stat">{feature.stat}</span>}
              {feature.tag && <div className="f-tag">{feature.tag}</div>}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
