import { TICKER_ITEMS } from '../data/content';

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker">
        {items.map((item, index) => (
          <span className="tick" key={`${item.user}-${index}`}>
            <span className="u">{item.user}</span>
            <span className="tag">{item.tag}</span>
            {item.value && <span className="val">{item.value}</span>}
            <span className="ago">{item.ago}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
