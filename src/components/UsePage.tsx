import { BookmarkletButton } from './BookmarkletButton';
import { KeyboardHint } from './KeyboardHint';
import { USE_STEPS } from '../data/content';
import { useLiveFeed } from '../hooks/useLiveFeed';
import { useReveal } from '../hooks/useReveal';

interface UsePageProps {
  onShowDrop: () => void;
  onHideDrop: () => void;
}

export function UsePage({ onShowDrop, onHideDrop }: UsePageProps) {
  const revealRef = useReveal<HTMLDivElement>();
  const { rows, pfpSrc } = useLiveFeed(true);

  return (
    <main id="use">
      <div className="use-page">
        <a className="back-link" href="#home">
          ‹ back
        </a>
        <div className="use-grid">
          <div className="feed-demo">
            <div className="feed-head">
              <span className="dot" /> LIVE FEED
            </div>
            <div className="feed-rows" id="feedRows">
              {rows.map((item, index) => (
                <div className="frow" key={`${item.u}-${index}`}>
                  <div className="f-pfp">
                    <b>{(item.name || item.u)[0]}</b>
                    <img
                      src={pfpSrc(item)}
                      alt=""
                      loading="lazy"
                      onError={(event) => event.currentTarget.remove()}
                    />
                  </div>
                  <div className="f-body">
                    <div className="f-top">
                      <span className="fname">{item.name || item.u}</span>
                      <span className="verified">✓</span>
                      <span className="fu">@{item.u}</span>
                    </div>
                    <div className="f-meta">
                      <span className="ftag">{item.t}</span>
                      <span className="fval">{item.v}</span>
                      {item.ok && <span className="fok">✓ bought</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="use-copy">
            <div className="use-kicker">GET STARTED</div>
            <h2 className="use-title">FOMO Twitter Tracker</h2>
            <p className="use-sub">
              This is your live feed the moment you&apos;re in — every tracked account streaming in real time, contract
              addresses pulled straight from the tweet, and fills landing before the crowd even sees the post.
            </p>
            <div className="use-install">
              <BookmarkletButton onShowDrop={onShowDrop} onHideDrop={onHideDrop}>
                Drag FOMO Twitter Tracker
              </BookmarkletButton>
              <ol className="use-howto">
                <li>
                  <span className="howto-text">
                    Drag the button above to your bookmarks bar.
                    <KeyboardHint />
                  </span>
                </li>
                <li>Open the bookmark when you&apos;re ready to track.</li>
                <li>Start selecting the accounts you want to track and buy.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="use-steps" ref={revealRef}>
          {USE_STEPS.map((step) => (
            <div className="ustep in" key={step.num}>
              <span className="n">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
