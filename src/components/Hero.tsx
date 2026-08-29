import { useHeroTilt, useLatencyStat } from '../hooks/useHeroTilt';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const revealRef = useReveal<HTMLDivElement>();
  const latency = useLatencyStat();
  const { heroRef, stageRef, tweetRef } = useHeroTilt();

  return (
    <header className="hero" id="hero" ref={heroRef}>
      <div className="watermark" aria-hidden="true">
        FOMOTRACKER
      </div>

      <div className="hero-grid">
        <div className="stage" id="stage">
          <div className="stage-3d" id="stage3d" ref={stageRef}>
            <div className="card-group">
              <div className="tweet-card" id="tweetCard" ref={tweetRef}>
                <div className="tweet-head">
                  <div className="avatar">
                    M
                    <img
                      src="https://unavatar.io/x/MustStopMurad"
                      alt=""
                      onError={(event) => event.currentTarget.remove()}
                    />
                  </div>
                  <div>
                    <div className="t-name">
                      Murad <span className="verified">✓</span>
                    </div>
                    <div className="t-handle">@MustStopMurad · 2m</div>
                  </div>
                  <div className="t-dots">···</div>
                </div>
                <div className="tweet-body">
                  memecoin supercycle in full effect. only one i&apos;m accumulating this week 🧙‍♂️ patience will
                  be rewarded
                  <br />
                  <span className="ca">$WIZARD</span>{' '}
                  <span className="ca">8xWzrdK4v2mNpQ7RfTs13yhMEB1s3ruM3rPvTGpump</span>
                </div>
                <div className="tweet-stats">
                  <span>💬 428</span>
                  <span className="stat-rt">🔁 2.1K</span>
                  <span className="stat-like">❤️ 12K</span>
                  <span>📊 738K</span>
                </div>
              </div>

              <div className="term-card">
                <div className="term-bar">
                  <span className="term-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="term-bar-label">live · auto-buy</span>
                  <span className="term-chip">CA DETECTED</span>
                </div>
                <div className="term-head">
                  <div className="term-name">
                    Twitter Tracker <span className="verified">✓</span>
                  </div>
                </div>
                <div className="term-body">
                  <div className="term-line">
                    <span className="dim">src</span> <span className="h">@MustStopMurad</span>
                  </div>
                  <div className="term-line">
                    <span className="dim">ca</span> <span className="hl">8xWzrdK4_TGpump</span>
                  </div>
                  <div className="term-line">
                    <span className="ok">✓ Auto-bought</span> <span className="h">1.5 SOL</span>{' '}
                    <span className="dim">via</span>{' '}
                    <img className="term-via-logo" src="/fomo-logo.svg" alt="FOMO" />
                  </div>
                  <div className="term-line">
                    <span className="dim">filled 0.4s after tweet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <h1>
            <span className="l1">Buy the tweet</span>
            <span className="l2">before the crowd</span>
            <span className="l3">sees it.</span>
          </h1>
          <div className="hero-sub">
            <p className="lede">
              FOMO Twitter Tracker watches the accounts that move memecoins and fires the moment they post. It reads
              the contract address straight out of the tweet and buys it automatically through <strong>FOMO</strong>,
              so you&apos;re filled before the reply guys even refresh.
            </p>
            <div className="cta-col">
              <a className="btn btn-primary" href="#use">
                FOMO Twitter Tracker <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#how">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="stat-strip reveal-stagger" ref={revealRef}>
        <div className="stat-cell">
          <span className="v" id="latStat">
            ~{latency}
            <em>ms</em>
          </span>
          <span className="k">alert latency</span>
        </div>
        <div className="stat-cell">
          <span className="v">
            0.4<em>s</em>
          </span>
          <span className="k">median fill after tweet</span>
        </div>
        <div className="stat-cell">
          <span className="v">1,284</span>
          <span className="k">accounts tracked</span>
        </div>
        <div className="stat-cell">
          <span className="v">
            24<em>/7</em>
          </span>
          <span className="k">always watching</span>
        </div>
      </div>
    </header>
  );
}
