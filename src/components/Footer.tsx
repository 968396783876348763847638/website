import { Brand } from './Brand';

export function Footer() {
  return (
    <footer>
      <a className="brand" href="#home">
        <Brand />
      </a>
      <span>© 2026 FOMO Twitter Tracker. Not financial advice.</span>
    </footer>
  );
}
