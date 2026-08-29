import { TIMELINE_STEPS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function HowItWorks() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id="how" ref={revealRef}>
      <div className="wrap">
        <div className="kicker reveal">02 / how it works</div>
        <h2 className="sec-title reveal">Three steps to the fastest fill on the timeline</h2>
        <p className="sec-sub reveal">
          Set it up once. From then on, the tweet is the trigger and the buy is automatic.
        </p>

        <div className="timeline">
          {TIMELINE_STEPS.map((step, index) => (
            <div className="tstep reveal" data-i={index} key={step.num}>
              <span className="t-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="mono">{step.mono}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
