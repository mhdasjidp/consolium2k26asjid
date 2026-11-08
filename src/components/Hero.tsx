import React, { useRef, useState } from 'react';
import { EVENT_CONTENT, TEAM_COLOR_ORDER } from '../theme';

const LANE_ITEMS = [
  { key: 'cosmix', team: TEAM_COLOR_ORDER[0], word: 'LA-COSMIX' },
  { key: 'scale', team: TEAM_COLOR_ORDER[1], word: 'Al-Cognix' },
  { key: 'think', team: TEAM_COLOR_ORDER[2], word: 'EL-CLARIX' },
  { key: 'build', team: TEAM_COLOR_ORDER[3], word: 'LO-GLIFIX' },
  { key: 'ship', team: TEAM_COLOR_ORDER[4], word: 'DER-ZENIX' },
] as const;

export const ColorLanes: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className="lanes"
      onMouseLeave={() => setActive(null)}
      aria-label="Five team pillars of Consoulium 2k26: LA-COSMIX, Al-Cognix, EL-CLARIX, LO-GLIFIX, DER-ZENIX"
    >
      {LANE_ITEMS.map((lane, idx) => {
        const isActive = active === lane.key;
        return (
          <div
            key={lane.key}
            className={`lane lane--${lane.key} ${isActive ? 'is-active' : ''}`}
            style={
              {
                '--c': lane.team.hex,
                '--ink': lane.team.ink,
                '--i': idx,
              } as React.CSSProperties
            }
            onMouseEnter={() => setActive(lane.key)}
            data-cursor={lane.word}
          >
            <div className="lane__pill">
              <span className="lane__word">{lane.word}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} id="top" className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__meta">
        <div className="hero__meta-item">
          <span className="dot dot--blue" />
          <span>Consoulium 2k26 · Ayatic Codex</span>
        </div>
        <div className="hero__meta-item hero__meta-item--center">
          <span>Ahsanul Khaliqin · Signs of the Universe</span>
        </div>
        <div className="hero__meta-item hero__meta-item--right">
          <span>2026 Edition</span>
        </div>
      </div>

      {/* Strict 1-2-3 DOM Source Order:
          1. Title Block (CONSOULIUM 2026 overline + Ayatic Codex headline, shifted slightly left)
          2. 5 Team Color Pills graphic block
          3. Long Consoulium theme description paragraph
          Mobile/Tablet (< lg): flex-col vertical stack (1 -> 2 -> 3)
          Desktop (lg:): 2-column grid (Title Top-Left, Pills Top-Right, Description Full-Width Bottom) */}
      <div className="hero__grid flex flex-col lg:grid lg:grid-cols-[minmax(0,1.18fr)_minmax(0,1fr)] items-stretch lg:items-center">
        {/* 1. Title Block (shifted slightly left) */}
        <div className="hero__head -ml-4 lg:-ml-6 pl-0 flex flex-col justify-center gap-5 lg:col-start-1 lg:row-start-1">
          <div className="hero__tags" data-reveal>
            <span className="pill pill--open">
              <i className="pill__dot" />
              Registrations open
            </span>
            <span className="eyebrow">CONSOULIUM 2026 · AYATIC CODEX</span>
          </div>

          <h1 className="hero__title" aria-label={EVENT_CONTENT.headline}>
            <span className="hero__title-en">
              <span className="hero__line hero__line--1">
                <span className="hero__word">Ayatic</span>
              </span>
              <span className="hero__line hero__line--2 hero__line--accent">
                <span className="hero__word hero__word--italic">Codex</span>
              </span>
            </span>
          </h1>
        </div>

        {/* 2. 5 Team Color Pills Graphic Block */}
        <div className="hero__side w-full lg:col-start-2 lg:row-start-1">
          <ColorLanes />
        </div>

        {/* 3. Theme Description Paragraph */}
        <div className="hero__pitch w-full lg:col-span-2 lg:row-start-2" data-reveal>
          <p className="hero__lede text-gray-400 text-lg leading-relaxed max-w-4xl">
            Consoulium 2026: Ayatic Codex explores the divine patterns and
            rhythmic order woven into the universe. By mindfully observing the
            manifest signs (ayat) across creation—from delicate ecosystems to
            majestic galaxies—we discover the clearest path to the Creator,
            inspiring a faith built on profound certainty.
          </p>
          <div className="hero__ctas">
            <a
              href="#tickets"
              className="btn btn--dark btn--lg"
              data-magnetic
              data-cursor="CLAIM"
            >
              <span className="btn__text">Explore Codex</span>
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
              <span className="btn__bars" aria-hidden="true">
                {TEAM_COLOR_ORDER.map((team) => (
                  <i key={team.id} style={{ background: `var(${team.cssVar})` }} />
                ))}
              </span>
            </a>
            <a
              href="#agenda"
              className="btn btn--ghost btn--lg"
              data-magnetic
              data-cursor="AGENDA"
            >
              <span className="btn__text">See schedule</span>
              <span className="btn__arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
