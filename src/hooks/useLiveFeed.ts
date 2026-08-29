import { useEffect, useRef, useState } from 'react';
import { FEED_POOL, type FeedItem } from '../data/content';

const MAX_ROWS = 7;

function pfpSrc(item: FeedItem) {
  return item.img || `https://unavatar.io/x/${encodeURIComponent(item.u)}`;
}

export function useLiveFeed(active: boolean) {
  const [rows, setRows] = useState<FeedItem[]>([]);
  const indexRef = useRef(Math.floor(Math.random() * FEED_POOL.length));

  useEffect(() => {
    if (!active) {
      setRows([]);
      return;
    }

    indexRef.current = Math.floor(Math.random() * FEED_POOL.length);

    const initial = Array.from({ length: 5 }, () => {
      const item = FEED_POOL[indexRef.current % FEED_POOL.length];
      indexRef.current += 1;
      return item;
    });

    setRows(initial);

    const timer = window.setInterval(() => {
      const item = FEED_POOL[indexRef.current % FEED_POOL.length];
      indexRef.current += 1;

      setRows((current) => [item, ...current].slice(0, MAX_ROWS));
    }, 1600);

    return () => window.clearInterval(timer);
  }, [active]);

  return { rows, pfpSrc };
}
