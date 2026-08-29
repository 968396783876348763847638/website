import { Features } from './Features';
import { FinalCTA } from './FinalCTA';
import { FAQ } from './FAQ';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Ticker } from './Ticker';

export function HomePage() {
  return (
    <div id="home">
      <Ticker />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
