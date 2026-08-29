import { useEffect, useRef } from 'react';

export function DropOverlay({ visible }: { visible: boolean }) {
  const arrowLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;

    const layer = arrowLayerRef.current;
    if (!layer || layer.dataset.ready) return;

    layer.dataset.ready = '1';

    for (let i = 0; i < 55; i += 1) {
      const el = document.createElement('span');
      el.className = 'drop-arrow';
      el.textContent = '↑';
      el.style.left = `${Math.random() * 100}%`;
      el.style.bottom = `${-10 - Math.random() * 40}vh`;
      el.style.fontSize = `${11 + Math.random() * 16}px`;
      el.style.setProperty('--a', String(0.18 + Math.random() * 0.45));
      el.style.animationDuration = `${8 + Math.random() * 14}s`;
      el.style.animationDelay = `${Math.random() * -18}s`;
      layer.appendChild(el);
    }
  }, [visible]);

  useEffect(() => {
    document.body.classList.toggle('dropping', visible);
    return () => document.body.classList.remove('dropping');
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="drop-overlay" aria-hidden="true">
      <div className="drop-arrows" ref={arrowLayerRef} />
      <div className="drop-top">↑ ↑ DROP IN BOOKMARKS BAR ↑ ↑</div>
      <div className="drop-center">
        <p className="drop-title">Drop it in the bar</p>
        <div className="drop-hint">
          <div className="key-rows">
            <div className="key-row">
              <span className="key-os">WINDOWS</span>
              <kbd>Ctrl</kbd>
              <span className="key-plus">+</span>
              <kbd>Shift</kbd>
              <span className="key-plus">+</span>
              <kbd>B</kbd>
            </div>
            <div className="key-row">
              <span className="key-os">MAC</span>
              <kbd>⌘ Cmd</kbd>
              <span className="key-plus">+</span>
              <kbd>Shift</kbd>
              <span className="key-plus">+</span>
              <kbd>B</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
