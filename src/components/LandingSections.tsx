import React, { useEffect, useRef, useState } from 'react';
import { TEAM_COLORS } from '../theme';

const pad2 = (n: number) => String(n).padStart(2, '0');

function computeCountdown(targetDate = '2026-11-26T09:00:00') {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, done: diff === 0 };
}

export const Countdown: React.FC<{ target?: string }> = ({
  target = '2026-11-26T09:00:00',
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

export const CONSOULIUM_TEAMS = [
  {
    name: 'LA-COSMIX',
    overline: 'Nizam',
    colorClass: 'text-[#6D28D9]',
    description: 'Cosmic order, discipline, and absolute balance.',
  },
  {
    name: 'AL-COGNIX',
    overline: 'Tafakkur',
    colorClass: 'text-[#E11D48]',
    description: 'Deep contemplation and the fire of the thinking mind.',
  },
  {
    name: 'EL-CLARIX',
    overline: 'Basira',
    colorClass: 'text-[#2563EB]',
    description: 'Inner vision, absolute clarity, and unwavering focus.',
  },
  {
    name: 'LO-GLIFIX',
    overline: 'Ayat',
    colorClass: 'text-[#10B981]',
    description: "Reading creation's signs and discerning profound truths.",
  },
  {
    name: 'DER-ZENIX',
    overline: 'Marifa',
    colorClass: 'text-[#F59E0B]',
    description: 'Deep spiritual knowledge and the summit of realization.',
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
        <span className="eyebrow">Our story · 2026</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div
            className="race__year race__year--now is-passed lg:col-span-1"
            style={{ '--c': TEAM_COLORS['team-purple'].hex } as React.CSSProperties}
          >
            <span className="race__buoy" aria-hidden="true" />
            <span className="race__yr">2026</span>
            <span className="race__where eyebrow">CONSOULIUM CAMPUS</span>
            <span className="race__line">The 5th edition. Ayatic Codex.</span>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-5 gap-6 pt-[22px]">
            {CONSOULIUM_TEAMS.map((team) => (
              <div key={team.name} className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-widest opacity-70">
                  {team.overline}
                </span>
                <h3 className={`text-2xl font-bold ${team.colorClass}`}>
                  {team.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </div>
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
          <Countdown target="2026-11-26T09:00:00" />
          <span className="register__via">
            Nov 26, 27, 28, 29 • Bukhari Da&apos;wa College
          </span>
        </div>
      </div>

      <dl className="register__facts">
        <div className="register__fact register__fact--date">
          <dt className="eyebrow">Date</dt>
          <dd>
            26 – 29 Nov 2026
            <span>9:00 AM to 6:00 PM IST</span>
          </dd>
        </div>

        <div className="register__fact register__fact--venue">
          <dt className="eyebrow">Venue</dt>
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
