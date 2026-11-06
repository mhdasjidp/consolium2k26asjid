import React, { useEffect, useRef, useState } from 'react';
import { TEAM_COLORS } from '../theme';

const pad2 = (n: number) => String(n).padStart(2, '0');

function computeCountdown(targetDate = '2026-11-26T00:00:00') {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, done: diff === 0 };
}

export const Countdown: React.FC<{ target?: string }> = ({
  target = '2026-11-26T00:00:00',
}) => {
  const [timeLeft, setTimeLeft] = useState(() => computeCountdown(target));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTimeLeft(computeCountdown(target));
    }, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const cells = [
    { v: String(timeLeft.days), l: 'Days' },
    { v: pad2(timeLeft.hours), l: 'Hours' },
    { v: pad2(timeLeft.minutes), l: 'Minutes' },
    { v: pad2(timeLeft.seconds), l: 'Seconds' },
  ];

  return (
    <div className="cd" role="timer" aria-label="Time until Consoulium 2026">
      {cells.map((cell, idx) => (
        <div className="cd__cell" key={cell.l}>
          <span className="cd__num" key={cell.v}>
            {cell.v}
          </span>
          <span className="cd__label">{cell.l}</span>
          {idx < cells.length - 1 ? (
            <span className="cd__sep" aria-hidden="true">
              :
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export const THOUGHT_EXAMPLES = [
  'A deep reflection on the precise, rhythmic turning of the cosmic clock.',
  'Contemplating the delicate internal anatomies of living ecosystems.',
  'Tracing the rational harmony woven across galaxies and superclusters.',
  'Observing the manifest signs of creation in the awakening of dawn.',
  'Decoding the profound biological codes of the natural order.',
] as const;

export const STORY_YEARS = [
  {
    year: '2022',
    where: 'CONSOULIUM CAMPUS',
    line: 'Exploring the signs of creation and awakening mindful reflection.',
    kind: 'think',
    color: TEAM_COLORS['team-blue'].hex,
  },
  {
    year: '2023',
    where: 'CONSOULIUM CAMPUS',
    line: 'Deepening the intellect through scholarly dialogues and collective contemplation.',
    kind: 'build',
    color: TEAM_COLORS['team-green'].hex,
  },
  {
    year: '2024',
    where: 'CONSOULIUM CAMPUS',
    line: 'Uniting seekers of knowledge in pursuit of rational harmony and spiritual insight.',
    kind: 'ship',
    color: TEAM_COLORS['team-yellow'].hex,
  },
  {
    year: '2025',
    where: 'CONSOULIUM CAMPUS',
    line: 'Expanding horizons of wisdom, artistic expression, and cosmic contemplation.',
    kind: 'scale',
    color: TEAM_COLORS['team-red'].hex,
  },
  {
    year: '2026',
    where: 'CONSOULIUM CAMPUS',
    line: 'The 5th edition. Ayatic Codex.',
    kind: 'now',
    color: TEAM_COLORS['team-purple'].hex,
  },
] as const;

export const STORY_STATS = [
  {
    value: 2026,
    raw: true,
    label: 'edition of consoulium in the theme of ayatic codex',
  },
  {
    value: 600,
    suffix: '+',
    label: 'participants',
  },
  {
    value: 300,
    suffix: '+',
    label: 'events',
  },
  {
    value: 4,
    suffix: '+',
    label: 'stages',
  },
] as const;

const numFmt = new Intl.NumberFormat('en-IN');

export const StoryAndTimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      className="race"
      id="race"
      ref={sectionRef}
      aria-labelledby="race-title"
    >
      <header className="race__head">
        <span className="eyebrow">Our story · 2022 → 2026</span>
        <h2 id="race-title" className="race__title">
          A legacy of intellect, reflection, and spiritual realization.
        </h2>
        <p className="race__lede">
          Consoulium brings together people of intellect to dive deep into the
          boundless ocean of knowledge, marveling at the craftsmanship of the
          Best of Creators, cultivating a community that keeps growing more
          observant and connected.
        </p>
      </header>

      <div className="race__track">
        <div className="race__lane" aria-hidden="true">
          <span className="race__boat">
            <span className="race__trail" />
            <span className="race__head-glyph" />
          </span>
        </div>

        <ol className="race__years">
          {STORY_YEARS.map((item) => (
            <li
              key={item.year}
              className={`race__year ${
                item.kind === 'now' ? 'race__year--now' : ''
              }`}
              style={{ '--c': item.color } as React.CSSProperties}
            >
              <span className="race__buoy" aria-hidden="true" />
              <span className="race__yr">{item.year}</span>
              <span className="race__where eyebrow">{item.where}</span>
              <span className="race__line">{item.line}</span>
            </li>
          ))}
        </ol>
      </div>

      <ul className="race__stats grid grid-cols-2 lg:grid-cols-4">
        {STORY_STATS.map((stat, idx) => (
          <li
            key={stat.label}
            className={
              idx > 0
                ? 'border-l border-white/10 pl-4 lg:pl-6'
                : 'pl-0'
            }
          >
            <span className="race__num text-6xl lg:text-7xl font-bold">
              <span data-count={stat.value}>
                {'raw' in stat && stat.raw
                  ? String(stat.value)
                  : numFmt.format(stat.value)}
              </span>
              {'suffix' in stat && stat.suffix ? (
                <span className="race__suffix">{stat.suffix}</span>
              ) : null}
            </span>
            <span className="race__label text-sm text-gray-400">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const InteractiveTerminalSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [input, setInput] = useState('');
  const [passText, setPassText] = useState<string>(THOUGHT_EXAMPLES[0]);
  const [isExample, setIsExample] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextText = input.trim() || THOUGHT_EXAMPLES[0];
    setPassText(nextText);
    setIsExample(!input.trim());
  };

  return (
    <section
      className="thought"
      id="thought"
      ref={sectionRef}
      aria-labelledby="thought-title"
    >
      <div className="thought__intro">
        <span className="eyebrow">Your turn</span>
        <h2 id="thought-title" className="thought__title">
          What will you discover through mindful observation?
        </h2>
        <p className="thought__lede">
          Observe a sign and watch it unfold through Tafakkur, Basira, and
          Marifa. Keep the pass, and bring your insights along. Nothing you type
          leaves this page.
        </p>

        <form className="thought__form" onSubmit={handleSubmit}>
          <label htmlFor="thought-input" className="sr-only">
            Your idea
          </label>
          <input
            id="thought-input"
            className="thought__input"
            type="text"
            maxLength={90}
            autoComplete="off"
            value={input}
            placeholder={THOUGHT_EXAMPLES[0]}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn thought__go" type="submit">
            Launch idea <span className="btn__arrow">→</span>
          </button>
        </form>
      </div>

      <div className="thought__pass">
        <article className="pass" aria-label="Your boarding pass">
          <span className="pass__sheen" aria-hidden="true" />
          <div className="pass__main">
            <header className="pass__top">
              <span className="pass__wordmark">Consoulium 2k26</span>
              <span className="pass__kicker">
                Boarding pass
                {isExample ? <b className="pass__example">Example</b> : null}
              </span>
            </header>
            <span className="pass__label">Your thought</span>
            <p className="pass__thought">“{passText}”</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export const CtaCountdownSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      className="register"
      id="register"
      ref={sectionRef}
      aria-labelledby="register-title"
    >
      <div className="register__head">
        <div className="section-eyebrow">
          <span className="pill pill--open register__pill">
            <i className="pill__dot" />
            Registrations open
          </span>
          <span className="eyebrow">Consoulium 2026 · Limited seats</span>
        </div>
        <h2
          className="register__title text-4xl md:text-6xl font-bold"
          id="register-title"
        >
          <span className="register__line">
            <span className="register__inner text-4xl md:text-6xl font-bold">
              Save your seat.
            </span>
          </span>
          <span className="register__line">
            <span className="register__inner register__accent text-4xl md:text-6xl font-bold">
              Bring your deepest reflection.
            </span>
          </span>
        </h2>
      </div>

      <div className="register__action">
        <a
          className="mega"
          href="#schedule"
          target="_blank"
          rel="noopener"
          data-cursor
        >
          <span className="mega__fill" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="mega__labels">
            <span className="mega__label">Register now</span>
            <span className="mega__label mega__label--next" aria-hidden="true">
              Register now
            </span>
          </span>
          <span className="mega__arrow" aria-hidden="true">
            →
          </span>
        </a>

        <div className="register__count">
          <Countdown target="2026-11-26T00:00:00" />
          <span className="register__via">
            Nov 26, 27, 28, 29 • Bukhari Da&apos;wa College
          </span>
        </div>
      </div>

      <dl className="register__facts">
        <div className="register__fact register__fact--venue">
          <dt>Venue</dt>
          <dd>
            <a
              className="register__venue"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener"
              data-cursor
            >
              <span>Consoulium Campus</span>
              <span className="register__venue-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <em>Kondotty, Sa&apos;ada Nagar, Malappuram, Kerala, India</em>
          </dd>
        </div>
      </dl>
    </section>
  );
};
