export interface TickerItem {
  user: string;
  tag: string;
  value?: string;
  ago: string;
}

export const TICKER_ITEMS: TickerItem[] = [
  { user: '@blknoiz06', tag: '✦ new tweet', ago: '24s' },
  { user: '@Cupseyy', tag: 'CA', value: '4aF2m…B9c1', ago: '38s' },
  { user: '@theunipcs', tag: '$', value: '$BONK', ago: '52s' },
  { user: '@notthreadguy', tag: '✦ quote RT', ago: '1m' },
  { user: '@orangie', tag: 'CA', value: 'Cf2pR…8xNa', ago: '1m' },
  { user: '@Loopifyyy', tag: '$', value: '$POPCAT', ago: '2m' },
  { user: '@Pumpfun', tag: 'CA', value: '7Wm3q…Fk2p', ago: '2m' },
  { user: '@MustStopMurad', tag: '✦ new tweet', ago: '2m' },
  { user: '@kookcapitalllc', tag: '$', value: '$WIF', ago: '3m' },
  { user: '@frankdegods', tag: 'CA', value: '3xPa9…mQ4r', ago: '4m' },
];

export interface FeatureItem {
  tag?: string;
  stat?: string;
  title: string;
  description: string;
  wide?: boolean;
}

export const FEATURES: FeatureItem[] = [
  {
    stat: '~55ms',
    title: 'Alerts faster than the timeline',
    description:
      'Direct firehose connection. The moment a tracked account posts, the alert is already on your screen, before the tweet even finishes rendering for everyone else.',
    wide: true,
  },
  {
    tag: 'CA_PARSE',
    title: 'CA extraction',
    description:
      'Contract addresses parsed from tweet text, images, and links. Solana and EVM, pump.fun links, tickers. Nothing slips through.',
  },
  {
    tag: 'AUTO_BUY',
    title: 'Auto-buy execution',
    description: 'Fills routed through FOMO with your preset size, slippage, and priority fee.',
  },
  {
    tag: 'FEED',
    title: 'Live feed',
    description:
      'Every tracked account in one stream: new tweets, quote RTs, deletions, and detected CAs, timestamped to the second.',
  },
  {
    tag: 'LISTS',
    title: 'Curated watchlists',
    description:
      'Track the accounts that actually move markets. Custom lists per meta, per chain, or per conviction level.',
  },
  {
    tag: 'GUARD',
    title: "Safety checks that don't cost you the entry",
    description:
      'Optional pre-buy checks for mint authority, LP lock, and honeypot patterns, fast enough to run before every fill without giving up your edge.',
    wide: true,
  },
];

export interface TimelineStep {
  num: string;
  title: string;
  description: string;
  mono: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    num: 'STEP 01',
    title: 'Pick your accounts',
    description:
      'Add the accounts you want tracked. FOMO Twitter Tracker watches them 24/7 over a low-latency connection.',
    mono: '✦ @MustStopMurad added to watchlist',
  },
  {
    num: 'STEP 02',
    title: 'Connect your terminal',
    description:
      'Link FOMO and set your default buy size, slippage, and priority fee per account or per list.',
    mono: '✦ FOMO connected · 1.5 SOL default',
  },
  {
    num: 'STEP 03',
    title: 'Let the tweet trigger the buy',
    description:
      "When a tracked account posts a CA, it's extracted and bought in the same breath. You'll see the fill before the notification.",
    mono: '✦ filled 0.4s after tweet',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How fast are the alerts really?',
    answer:
      "Alerts land in roughly 55 milliseconds from the moment the tweet hits the servers. Auto-buys typically fill within half a second of the post, long before the tweet shows up in most people's timelines.",
    open: true,
  },
  {
    question: 'Which trading terminals are supported?',
    answer:
      'FOMO is supported out of the box. You connect once, set your defaults, and FOMO Twitter Tracker routes every auto-buy through it.',
  },
  {
    question: 'Do I have to auto-buy, or can I just get alerts?',
    answer:
      'Auto-buy is optional and off by default. You can run alert-only mode, enable one-click buys, or turn on full auto-execution per account. Pick whatever matches your risk appetite.',
  },
  {
    question: 'What if a tweet contains multiple contract addresses?',
    answer:
      'The parser ranks every detected CA by context: position in the tweet, ticker match, and link source. It either buys the top candidate or surfaces all of them for a one-click choice, depending on your settings.',
  },
  {
    question: 'Does it need my private keys?',
    answer:
      "No. Execution happens through your connected terminal's own session. FOMO Twitter Tracker never sees or stores your keys.",
  },
];

export interface FeedItem {
  u: string;
  name: string;
  t: string;
  v: string;
  ok: boolean;
  img?: string;
}

export const FEED_POOL: FeedItem[] = [
  { u: 'MustStopMurad', name: 'Murad', t: 'CA', v: '$WIZARD', ok: true, img: 'https://unavatar.io/x/MustStopMurad' },
  { u: 'Cupseyy', name: 'Cupsey', t: 'CA', v: '4aF2m…B9c1', ok: true },
  { u: 'theunipcs', name: 'Unipcs', t: '$', v: '$BONK', ok: false },
  { u: 'orangie', name: 'Orangie', t: 'CA', v: 'Cf2pR…8xNa', ok: true },
  { u: 'Loopifyyy', name: 'Loopify', t: '$', v: '$POPCAT', ok: false },
  { u: 'Pumpfun', name: 'Pump.fun', t: 'CA', v: '7Wm3q…Fk2p', ok: true },
  { u: 'blknoiz06', name: 'Ansem', t: 'tweet', v: 'new post', ok: false },
  { u: 'frankdegods', name: 'Frank', t: 'CA', v: '3xPa9…mQ4r', ok: true },
  { u: 'notthreadguy', name: 'ThreadGuy', t: 'RT', v: 'quote RT', ok: false },
  { u: 'kookcapitalllc', name: 'Kook', t: '$', v: '$WIF', ok: true },
];

export interface UseStep {
  num: string;
  title: string;
  description: string;
}

export const USE_STEPS: UseStep[] = [
  {
    num: '01',
    title: 'Open the live feed',
    description:
      "Launch FOMO Twitter Tracker and you're instantly watching every tracked account: new tweets, detected CAs, and fills as they happen.",
  },
  {
    num: '02',
    title: 'Connect FOMO',
    description:
      'One-time link with your default buy size, slippage, and priority fee. FOMO Twitter Tracker never sees or stores your keys.',
  },
  {
    num: '03',
    title: 'Arm auto-buy and get filled first',
    description:
      "When a tracked account posts a CA, it's extracted and bought in the same breath. Tweet, detection, fill, all under a second.",
  },
];
