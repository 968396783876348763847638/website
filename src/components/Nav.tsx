import { Brand } from './Brand';

export function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <a className="brand" href="#home">
          <Brand />
        </a>
        <div className="nav-right">
          <a className="link" href="#features">
            Features
          </a>
          <a className="link" href="#how">
            How it works
          </a>
          <a className="link" href="#faq">
            FAQ
          </a>
          <a className="btn btn-primary" href="#use">
            FOMO Twitter Tracker
          </a>
        </div>
      </div>
    </nav>
  );
}
