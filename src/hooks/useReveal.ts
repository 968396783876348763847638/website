import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(
      '.reveal, .feature, .tstep, .reveal-stagger > *, .stat-cell, details, .ustep',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const parent = el.parentElement;

          if (parent?.classList.contains('reveal-stagger')) {
            const index = [...parent.children].indexOf(el);
            el.style.transitionDelay = `${index * 90}ms`;
          } else if (el.dataset.i != null) {
            el.style.transitionDelay = `${Number(el.dataset.i) * 90}ms`;
          }

          el.classList.add('in');
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
