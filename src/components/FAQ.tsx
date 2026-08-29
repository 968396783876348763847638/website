import { FAQ_ITEMS } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function FAQ() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id="faq" ref={revealRef}>
      <div className="wrap">
        <div>
          <div className="kicker reveal">03 / faq</div>
          <h2 className="sec-title reveal">Questions, answered</h2>
          <p className="sec-sub reveal">Everything people ask before they start using the tracker.</p>
        </div>

        <div className="faq-list reveal-stagger">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} open={item.open}>
              <summary>
                {item.question} <span className="plus">+</span>
              </summary>
              <div className="faq-a">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
