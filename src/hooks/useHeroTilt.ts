import { useEffect, useRef, useState } from 'react';

export function useLatencyStat() {
  const [latency, setLatency] = useState('~57');

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLatency(String(48 + Math.floor(Math.random() * 18)));
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return latency;
}

export function useHeroTilt() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stage = stageRef.current;
    const tweet = tweetRef.current;

    if (!hero || !stage) {
      return;
    }

    let raf = 0;

    const applyTilt = (x: number, y: number, tilting: boolean) => {
      const rx = (0.5 - y) * 18;
      const ry = (x - 0.5) * 22;
      stage.style.transform = `rotateX(${rx + 6}deg) rotateY(${ry}deg) rotateZ(-2deg)`;
      hero.style.setProperty('--mx', `${x * 100}%`);
      hero.style.setProperty('--my', `${y * 100}%`);

      if (tweet) {
        tweet.style.setProperty('--gx', `${x * 100}%`);
        tweet.style.setProperty('--gy', `${y * 100}%`);
      }

      stage.classList.toggle('is-tilting', tilting);
    };

    const onMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => applyTilt(x, y, true));
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      stage.classList.remove('is-tilting');
      applyTilt(0.55, 0.35, false);
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    applyTilt(0.55, 0.35, false);

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return { heroRef, stageRef, tweetRef };
}
