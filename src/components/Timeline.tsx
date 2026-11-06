import React, { useEffect, useRef } from 'react';
import { TEAM_COLORS } from '../theme';

export interface TimelinePhase {
  kind: 'think' | 'build' | 'ship' | 'scale';
  id: 'ayat' | 'fikr' | 'basira' | 'marifa';
  time: string;
  place: string;
  timeTitle: string;
  verb: string;
  title: string;
  body: string;
  sceneDescription: string;
  teamColorVar: string;
  color: string;
  points: string[];
}

export const TIMELINE_PHASES: readonly TimelinePhase[] = [
  {
    kind: 'think',
    id: 'ayat',
    time: '06:00',
    place: 'Observation (Ayat)',
    timeTitle: '06:00 · Observation (Ayat)',
    verb: 'Observation (Ayat)',
    title: 'Perceive the signs at dawn',
    body: 'Vector artwork illustrating delicate internal anatomies and the intricate awakening of earthly ecosystems.',
    sceneDescription:
      'Vector artwork illustrating delicate internal anatomies and the intricate awakening of earthly ecosystems.',
    teamColorVar: 'var(--team-green)',
    color: TEAM_COLORS['team-green'].hex,
    points: [
      'Delicate internal anatomies',
      'Awakening of earthly ecosystems',
      'Manifest signs at dawn',
    ],
  },
  {
    kind: 'build',
    id: 'fikr',
    time: '12:00',
    place: 'Contemplation (Fikr)',
    timeTitle: '12:00 · Contemplation (Fikr)',
    verb: 'Contemplation (Fikr)',
    title: 'Decode the patterns by noon',
    body: 'Abstract visual representation of profound biological codes, rational harmony, and rhythmic natural order.',
    sceneDescription:
      'Abstract visual representation of profound biological codes, rational harmony, and rhythmic natural order.',
    teamColorVar: 'var(--team-red)',
    color: TEAM_COLORS['team-red'].hex,
    points: [
      'Profound biological codes',
      'Rational harmony',
      'Rhythmic natural order',
    ],
  },
  {
    kind: 'ship',
    id: 'basira',
    time: '16:00',
    place: 'Insight (Basira)',
    timeTitle: '16:00 · Insight (Basira)',
    verb: 'Insight (Basira)',
    title: 'Connect the matrix before dusk',
    body: 'Dynamic scene depicting the precise, rhythmic turning of the cosmic clock and the majestic dance of atoms.',
    sceneDescription:
      'Dynamic scene depicting the precise, rhythmic turning of the cosmic clock and the majestic dance of atoms.',
    teamColorVar: 'var(--team-blue)',
    color: TEAM_COLORS['team-blue'].hex,
    points: [
      'Rhythmic cosmic clock',
      'Majestic dance of atoms',
      'Matrix of creation',
    ],
  },
  {
    kind: 'scale',
    id: 'marifa',
    time: '20:00',
    place: 'Zenith (Marifa)',
    timeTitle: '20:00 · Zenith (Marifa)',
    verb: 'Zenith (Marifa)',
    title: 'Attain certainty by nightfall',
    body: 'A breathtaking starlit expanse showing galaxies, superclusters, and the boundless craftsmanship of the universe.',
    sceneDescription:
      'A breathtaking starlit expanse showing galaxies, superclusters, and the boundless craftsmanship of the universe.',
    teamColorVar: 'var(--team-yellow)',
    color: TEAM_COLORS['team-yellow'].hex,
    points: [
      'Galaxies & superclusters',
      'Boundless craftsmanship',
      'Certainty by nightfall',
    ],
  },
] as const;

interface SceneSvgProps {
  label: string;
  children: React.ReactNode;
}

const SceneSvg: React.FC<SceneSvgProps> = ({ label, children }) => (
  <svg
    className="scene"
    viewBox="0 0 1600 700"
    preserveAspectRatio="xMidYMax slice"
    role="img"
    aria-label={label}
  >
    <defs>
      <filter id="sc-soft" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>
    {children}
  </svg>
);

const WaterShimmer: React.FC<{ y: number }> = ({ y }) => (
  <g className="sc-shimmer" opacity=".55">
    <line x1="120" y1={y + 18} x2="540" y2={y + 18} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="34 22 14 28" />
    <line x1="680" y1={y + 38} x2="1180" y2={y + 38} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="22 18 44 26" />
    <line x1="260" y1={y + 62} x2="880" y2={y + 62} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="18 28 30 22" opacity=".7" />
    <line x1="1040" y1={y + 56} x2="1480" y2={y + 56} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="28 20 12 24" opacity=".7" />
  </g>
);

const BotanicalCluster: React.FC<{ x: number; y: number; scale?: number; flip?: number }> = ({
  x,
  y,
  scale = 1,
  flip = 1,
}) => (
  <g transform={`translate(${x} ${y}) scale(${scale * flip} ${scale})`}>
    <path d="M0 0 C -6 -55 -10 -110 -4 -168" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
    <g transform="translate(-4 -168)">
      <path d="M0 0 C -38 -18 -76 -4 -96 22 C -62 12 -32 8 0 0 Z" fill="currentColor" />
      <path d="M0 0 C -48 6 -82 32 -92 64 C -58 42 -28 24 0 0 Z" fill="currentColor" opacity=".85" />
      <path d="M0 0 C -22 -42 -4 -78 24 -96 C 12 -64 6 -32 0 0 Z" fill="currentColor" opacity=".9" />
      <path d="M0 0 C 38 -22 78 -8 102 18 C 66 8 34 4 0 0 Z" fill="currentColor" />
      <path d="M0 0 C 46 6 82 34 92 68 C 58 44 28 22 0 0 Z" fill="currentColor" opacity=".85" />
    </g>
  </g>
);

const BiologicalCell: React.FC<{ x: number; y: number; scale?: number }> = ({
  x,
  y,
  scale = 1,
}) => (
  <g className="cheena" transform={`translate(${x} ${y}) scale(${scale})`}>
    <line x1="0" y1="0" x2="-18" y2="-130" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="-22" y1="0" x2="-2" y2="-130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".7" />
    <g className="cheena__arm" style={{ transformOrigin: '-10px -125px' }}>
      <ellipse cx="52" cy="-164" rx="74" ry="42" fill="none" stroke="currentColor" strokeWidth="2.8" />
      <ellipse cx="52" cy="-164" rx="56" ry="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="6 5" opacity=".75" />
      <circle cx="38" cy="-164" r="14" fill="var(--g-yellow)" opacity=".35" />
      <circle cx="38" cy="-164" r="7" fill="currentColor" />
      <path d="M 68 -172 C 78 -178 88 -172 94 -164 C 88 -156 78 -150 68 -156 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="82" cy="-148" r="4" fill="var(--g-green)" />
      <circle cx="20" cy="-150" r="3.5" fill="var(--g-blue)" />
      <path
        d="M -10 -125 Q 20 -145 52 -122 M -10 -125 Q 15 -168 -22 -164 M 52 -164 L 126 -164 M 52 -164 L 88 -128"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity=".65"
      />
      <circle cx="126" cy="-164" r="4.5" fill="var(--g-red)" />
    </g>
  </g>
);

export const AyatDawnScene: React.FC = () => {
  const sceneRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        node.setAttribute('data-inview', entry.isIntersecting ? 'true' : 'false');
      },
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SceneSvg label="06:00 · Observation (Ayat) — biological cells, leaf venation, and food web diagrams at dawn">
      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #1e2a3a)' }}>
        <path
          d="M0 540 Q 260 500 520 528 T 1040 518 T 1600 535 L 1600 600 L 0 600 Z"
          fill="currentColor"
          opacity=".14"
        />
        <g opacity=".38" stroke="currentColor" fill="none">
          <path d="M 160 470 C 260 390 420 350 580 390 C 440 430 290 450 160 470 Z" strokeWidth="2" />
          <path d="M 160 470 C 300 420 440 400 580 390" strokeWidth="1.6" />
          <path d="M 280 442 L 250 408 M 360 422 L 335 380 M 440 408 L 425 372 M 320 432 L 365 442 M 410 414 L 460 422" strokeWidth="1.2" />
          <g strokeDasharray="5 5" strokeWidth="1.4">
            <line x1="580" y1="390" x2="740" y2="310" />
            <line x1="740" y1="310" x2="920" y2="360" />
            <line x1="740" y1="310" x2="860" y2="230" />
            <line x1="580" y1="390" x2="920" y2="360" />
          </g>
          <circle cx="580" cy="390" r="9" fill="var(--g-green)" />
          <circle cx="740" cy="310" r="12" fill="var(--g-yellow)" />
          <circle cx="920" cy="360" r="10" fill="var(--g-blue)" />
          <circle cx="860" cy="230" r="8" fill="var(--g-red)" />
        </g>

        <BotanicalCluster x={110} y={560} scale={0.95} />
        <BotanicalCluster x={165} y={565} scale={0.7} flip={-1} />
        <BotanicalCluster x={1470} y={560} scale={0.85} flip={-1} />

        <path
          d="M0 575 Q 240 555 460 572 T 980 568 T 1600 575 L 1600 615 L 0 615 Z"
          fill="currentColor"
          opacity=".85"
        />

        <BiologicalCell x={340} y={575} scale={1.05} />
        <BiologicalCell x={620} y={578} scale={0.95} />
        <BiologicalCell x={880} y={580} scale={0.82} />

        <g transform="translate(1220 565)">
          <path d="M 0 0 C -30 -55 -20 -115 20 -150 C 60 -115 70 -55 40 0 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 20 -150 L 20 0 M 20 -110 L -6 -85 M 20 -80 L 46 -55 M 20 -50 L -4 -28" stroke="currentColor" strokeWidth="1.5" />
          <circle className="idea" cx="20" cy="-165" r="7" fill="var(--g-yellow)" />
          <circle className="idea" cx="20" cy="-165" r="16" fill="var(--g-yellow)" opacity=".28" filter="url(#sc-soft)" />
        </g>

        <g className="birds" opacity=".75">
          <path className="bird" d="M 480 220 q 8 -8 16 0 q 8 -8 16 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path className="bird" d="M 520 205 q 7 -7 14 0 q 7 -7 14 0" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path className="bird" d="M 555 225 q 6 -6 12 0 q 6 -6 12 0" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </g>

        <rect x="0" y="595" width="1600" height="105" fill="currentColor" opacity=".18" />
        <WaterShimmer y={600} />
      </g>
    </SceneSvg>
  );
};

export const FikrNoonScene: React.FC = () => {
  const sceneRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        node.setAttribute('data-inview', entry.isIntersecting ? 'true' : 'false');
      },
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SceneSvg label="Abstract visual representation of profound biological codes, rational harmony, and rhythmic natural order.">
      <defs>
        <radialGradient id="fikr-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.12" />
          <stop offset="55%" stopColor="#64748B" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #1e2a3a)' }}>
        {/* Soft Ambient Contemplation Aura */}
        <circle cx="980" cy="350" r="310" fill="url(#fikr-aura)" />

        {/* Static Concentric Orbital Matrix Rings */}
        <g className="orbital-matrix">
          <circle
            cx="980"
            cy="350"
            r="245"
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            strokeOpacity="0.22"
          />
          <circle
            cx="980"
            cy="350"
            r="182"
            fill="none"
            stroke="#E11D48"
            strokeWidth="1.2"
            strokeOpacity="0.28"
            strokeDasharray="6 10"
          />
          <circle
            cx="980"
            cy="350"
            r="118"
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            strokeOpacity="0.26"
          />
          <circle
            cx="980"
            cy="350"
            r="58"
            fill="none"
            stroke="#E11D48"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <line
            x1="640"
            y1="350"
            x2="1320"
            y2="350"
            stroke="#334155"
            strokeWidth="0.8"
            strokeOpacity="0.16"
            strokeDasharray="4 8"
          />
          <line
            x1="980"
            y1="70"
            x2="980"
            y2="580"
            stroke="#334155"
            strokeWidth="0.8"
            strokeOpacity="0.16"
            strokeDasharray="4 8"
          />
        </g>

        {/* Outer Sweeping Orbital Rings & Subtle Nodes */}
        <g className="clock__hour" style={{ transformOrigin: '980px 350px' }}>
          <ellipse
            cx="980"
            cy="350"
            rx="390"
            ry="116"
            transform="rotate(-14 980 350)"
            fill="none"
            stroke="#334155"
            strokeWidth="1.2"
            strokeOpacity="0.26"
          />
          <ellipse
            cx="980"
            cy="350"
            rx="390"
            ry="116"
            transform="rotate(14 980 350)"
            fill="none"
            stroke="#E11D48"
            strokeWidth="1.25"
            strokeOpacity="0.3"
          />
          <g transform="translate(1356 256)">
            <circle r="9" fill="#E11D48" fillOpacity="0.18" />
            <circle className="lit" r="3.5" fill="#E11D48" />
          </g>
          <g transform="translate(604 444)">
            <circle r="9" fill="#334155" fillOpacity="0.15" />
            <circle className="lit" r="3.2" fill="#475569" />
          </g>
        </g>

        {/* Inner Harmonic Arabesque Ellipses & Glowing Nodes */}
        <g className="clock__min" style={{ transformOrigin: '980px 350px' }}>
          <ellipse
            cx="980"
            cy="350"
            rx="265"
            ry="84"
            transform="rotate(36 980 350)"
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeDasharray="4 6"
          />
          <ellipse
            cx="980"
            cy="350"
            rx="265"
            ry="84"
            transform="rotate(-36 980 350)"
            fill="none"
            stroke="#E11D48"
            strokeWidth="1"
            strokeOpacity="0.24"
            strokeDasharray="4 6"
          />
          <g transform="translate(1162 350)">
            <circle r="8" fill="#E11D48" fillOpacity="0.18" />
            <circle className="lit" r="3.5" fill="#E11D48" />
          </g>
          <g transform="translate(862 350)">
            <circle r="7" fill="#334155" fillOpacity="0.15" />
            <circle className="lit" r="3" fill="#475569" />
          </g>
          <g transform="translate(980 168)">
            <circle r="8" fill="#E11D48" fillOpacity="0.18" />
            <circle className="lit" r="3.2" fill="#E11D48" />
          </g>
        </g>

        {/* Central Contemplation Core */}
        <circle cx="980" cy="350" r="12" fill="#E11D48" fillOpacity="0.14" />
        <circle cx="980" cy="350" r="4.5" fill="#E11D48" />
        <circle cx="980" cy="350" r="1.8" fill="#FFFFFF" />

        {/* Minimal Horizon Line & Shimmer */}
        <line
          x1="-10"
          y1="598"
          x2="1610"
          y2="598"
          stroke="#334155"
          strokeWidth="1"
          strokeOpacity="0.22"
        />
        <WaterShimmer y={598} />
      </g>
    </SceneSvg>
  );
};

/**
 * Phase 3: Insight (Basira) — Cosmic Clockwork, Rotating Atomic Structures & Stylized Matrix
 * Replaces the original Vallam Kali (Snake Boat) animation completely while preserving
 * all ambient animation timing hooks (.cosmic-clock, .kettuvallam, .water-metro, .chundan,
 * .rower, .oar, .rower__body, .splash, .lead-spin).
 */
export const BasiraDuskScene: React.FC = () => {
  const sceneRef = useRef<SVGGElement | null>(null);
  const matrixX = [260, 410, 560, 710, 860, 1010, 1160, 1310];
  const nodePalette = ['#2563EB', '#E11D48', '#F59E0B', '#10B981'];

  useEffect(() => {
    const node = sceneRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        node.setAttribute('data-inview', entry.isIntersecting ? 'true' : 'false');
      },
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SceneSvg label="Dynamic scene depicting the precise, rhythmic turning of the cosmic clock and the majestic dance of atoms.">
      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #231832)' }}>
        {/* Central Cosmic Clock & Celestial Astrolabe */}
        <g className="cosmic-clock" transform="translate(800 295)">
          <circle r="195" fill="none" className="sc-line sc-dash" />
          <circle r="146" fill="none" className="sc-line sc-thin" />
          <circle r="96" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 6" />
          <ellipse rx="250" ry="82" transform="rotate(-18)" fill="none" stroke="#2563EB" strokeWidth="2.2" />
          <ellipse rx="250" ry="82" transform="rotate(22)" fill="none" stroke="#6D28D9" strokeWidth="1.8" strokeDasharray="6 6" />
          {Array.from({ length: 12 }, (_, idx) => {
            const rad = (idx * 30 * Math.PI) / 180;
            return (
              <line
                key={idx}
                x1={Math.cos(rad) * 128}
                y1={Math.sin(rad) * 128}
                x2={Math.cos(rad) * 146}
                y2={Math.sin(rad) * 146}
                className="sc-line"
              />
            );
          })}
          <line x1="0" y1="0" x2="-68" y2="-82" stroke="#6D28D9" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="112" y2="-34" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="-185" cy="54" r="10" fill="#2563EB" />
          <circle cx="155" cy="-46" r="8" fill="#F59E0B" />
          <circle cx="64" cy="86" r="7" fill="#10B981" />
          <circle r="20" fill="#F59E0B" className="sc-stroke" />
          <circle r="7" fill="#fff" />
        </g>

        {/* Left Rotating Atomic Structure */}
        <g transform="translate(290 325)">
          <g className="kettuvallam">
            {[0, 60, 120].map((deg) => (
              <ellipse
                key={deg}
                rx="92"
                ry="32"
                transform={`rotate(${deg})`}
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.2"
              />
            ))}
            <circle cx="80" cy="0" r="6" fill="#E11D48" />
            <circle cx="-40" cy="69" r="6" fill="#10B981" />
            <circle cx="-40" cy="-69" r="6" fill="#F59E0B" />
            <circle r="15" fill="#6D28D9" className="sc-stroke" />
            <circle r="5" fill="#fff" />
          </g>
        </g>

        {/* Right Rotating Atomic Orbital Shell */}
        <g transform="translate(1270 315)">
          <g className="water-metro">
            {[30, -30, 90].map((deg) => (
              <ellipse
                key={deg}
                rx="96"
                ry="34"
                transform={`rotate(${deg})`}
                fill="none"
                className="sc-line"
              />
            ))}
            <circle r="18" fill="#2563EB" className="sc-stroke" />
            <circle r="6" fill="#F59E0B" />
            <circle cx="82" cy="-16" r="7" fill="#E11D48" className="sc-stroke" />
            <circle cx="-74" cy="22" r="6" fill="#10B981" className="sc-stroke" />
          </g>
        </g>

        {/* Stylized Matrix Connecting Glowing Nodes (replaces Vallam Kali boat & rowers) */}
        <g className="chundan">
          <path
            d="M260 575L410 535L560 575L710 535L860 575L1010 535L1160 575L1310 535"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.2"
            strokeDasharray="6 6"
          />
          <path
            d="M260 575L560 575L860 575L1160 575M410 535L710 535L1010 535L1310 535"
            fill="none"
            stroke="#6D28D9"
            strokeWidth="1.6"
            strokeDasharray="3 6"
            opacity="0.75"
          />
          {matrixX.map((x, idx) => {
            const y = idx % 2 === 0 ? 575 : 535;
            const color = nodePalette[idx % 4];
            return (
              <g key={x} className="rower">
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.4"
                  strokeDasharray="4 4"
                  opacity="0.65"
                />
                <circle
                  className="splash"
                  cx={x}
                  cy={y}
                  r="22"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  opacity="0"
                />
                <line
                  className="oar sc-line"
                  data-origin={`${x} ${y}`}
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y - 22}
                />
                <g className="rower__body" data-origin={`${x} ${y}`}>
                  <polygon
                    points={`${x},${y - 10} ${x + 10},${y} ${x},${y + 10} ${x - 10},${y}`}
                    fill={color}
                    className="sc-stroke"
                  />
                  <circle cx={x} cy={y} r="3.2" fill="#fff" />
                </g>
              </g>
            );
          })}
        </g>

        <g transform="translate(1466 618)">
          <circle cx="27" cy="27" r="33" fill="#fff" />
          <g className="lead-spin">
            <circle cx="27" cy="27" r="18" fill="none" stroke="#2563EB" strokeWidth="3" strokeDasharray="8 6" />
          </g>
        </g>

        <WaterShimmer y={600} />
      </g>
    </SceneSvg>
  );
};

interface EllipticalGalaxyClusterProps {
  x: number;
}

const EllipticalGalaxyCluster: React.FC<EllipticalGalaxyClusterProps> = ({ x }) => {
  const starColors = ['#2563EB', '#E11D48', '#F59E0B', '#10B981'];
  return (
    <g className="sts" data-x={x}>
      <ellipse
        cx={x + 55}
        cy="240"
        rx="84"
        ry="28"
        transform={`rotate(-18 ${x + 55} 240)`}
        fill="none"
        stroke="#6D28D9"
        strokeWidth="2"
      />
      <ellipse
        cx={x + 55}
        cy="240"
        rx="52"
        ry="18"
        transform={`rotate(22 ${x + 55} 240)`}
        fill="none"
        className="sc-line sc-dash"
      />
      <circle cx={x + 55} cy="240" r="36" fill="none" className="sc-line sc-thin" />
      <circle className="sts__beacon" cx={x + 55} cy="240" r="7" fill="#F59E0B" />
      <g className="sts__trolley">
        <circle cx={x - 60} cy="294" r="5" fill="#2563EB" />
        <line
          className="sts__cable sc-line sc-thin"
          x1={x - 60}
          y1="300"
          x2={x - 60}
          y2="430"
          strokeDasharray="3 5"
        />
        <g className="sts__box">
          <circle
            cx={x - 60}
            cy="440"
            r="10"
            fill="#fff"
            stroke={starColors[x % 4]}
            strokeWidth="2.5"
          />
          <circle cx={x - 60} cy="440" r="4" fill={starColors[x % 4]} />
        </g>
      </g>
    </g>
  );
};

export const MarifaNightScene: React.FC = () => {
  const sceneRef = useRef<SVGGElement | null>(null);
  const starColors = ['#2563EB', '#E11D48', '#F59E0B', '#10B981'];

  useEffect(() => {
    const node = sceneRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        node.setAttribute('data-inview', entry.isIntersecting ? 'true' : 'false');
      },
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <SceneSvg label="A breathtaking starlit expanse showing galaxies, superclusters, and the boundless craftsmanship of the universe.">
      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #d8e2f0)' }}>
        <path
          d="M90 220L190 160L310 210L420 150L550 240M190 160L240 290L310 210M640 180L760 130L880 190L990 140L1080 230M760 130L810 260L880 190M1160 190L1280 135L1410 185L1510 125"
          className="sc-line sc-thin"
          strokeDasharray="3 5"
        />
        {[
          [90, 220],
          [190, 160],
          [310, 210],
          [420, 150],
          [550, 240],
          [240, 290],
          [640, 180],
          [760, 130],
          [880, 190],
          [990, 140],
          [1080, 230],
          [810, 260],
          [1160, 190],
          [1280, 135],
          [1410, 185],
          [1510, 125],
        ].map(([cx, cy], idx) => (
          <g key={idx} transform={`translate(${cx} ${cy})`}>
            <circle r="8" fill="#F59E0B" fillOpacity="0.2" />
            <circle className="lit" r="3.5" fill={starColors[idx % 4]} />
          </g>
        ))}

        <circle className="sts__beacon" cx="480" cy="340" r="8" fill="#F59E0B" />
        <g className="rainbow" transform="translate(480 340)">
          <ellipse rx="190" ry="68" transform="rotate(-18)" fill="none" stroke="#6D28D9" strokeWidth="4" />
          <ellipse rx="125" ry="44" transform="rotate(-18)" fill="none" className="sc-line sc-dash" />
          <ellipse rx="64" ry="22" transform="rotate(-18)" fill="none" className="sc-line sc-thin" />
        </g>

        <g className="stack">
          {Array.from({ length: 3 }, (_, row) =>
            Array.from({ length: 5 }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={880 + col * 32}
                y={490 - row * 24}
                width="14"
                height="14"
                rx="7"
                fill={starColors[(row + col * 3) % 4]}
                className="sc-stroke"
              />
            ))
          )}
        </g>

        <EllipticalGalaxyCluster x={1120} />
        <EllipticalGalaxyCluster x={1380} />

        <g className="ship">
          <ellipse
            cx="1280"
            cy="575"
            rx="220"
            ry="34"
            fill="#6D28D9"
            fillOpacity="0.16"
            stroke="#6D28D9"
            strokeWidth="2.2"
            strokeDasharray="8 6"
          />
          <ellipse
            cx="1280"
            cy="575"
            rx="140"
            ry="18"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          {[1120, 1200, 1280, 1360, 1440].map((cx, idx) => (
            <circle
              key={cx}
              cx={cx}
              cy={575 + (idx % 2 ? -6 : 6)}
              r="4.5"
              fill={starColors[idx % 4]}
            />
          ))}
        </g>

        <WaterShimmer y={585} />
      </g>
    </SceneSvg>
  );
};

/**
 * Bottom Deep-Space Expanse Graphic (Zenith / Marifa)
 * Replaces the original dark Kochi nighttime skyline (lighthouse, bridge, cranes, and buildings)
 * while maintaining identical dimensions (viewBox="0 0 1600 220") and responsive classes (.night__skyline).
 */
export const NightSkyline: React.FC = () => {
  const starField: [number, number, number][] = [
    [72, 48, 1.1],
    [138, 118, 0.8],
    [214, 66, 1.4],
    [292, 148, 0.9],
    [364, 54, 1.2],
    [432, 126, 0.7],
    [518, 42, 1.5],
    [588, 96, 1.0],
    [662, 158, 0.8],
    [736, 52, 1.3],
    [812, 134, 0.9],
    [886, 44, 1.6],
    [954, 116, 0.7],
    [1032, 62, 1.2],
    [1108, 152, 0.8],
    [1184, 48, 1.4],
    [1262, 124, 1.0],
    [1344, 58, 1.3],
    [1422, 142, 0.9],
    [1506, 64, 1.1],
  ];
  const palette = ['#2563EB', '#E11D48', '#F59E0B', '#10B981', '#6D28D9'];

  return (
    <svg
      className="night__skyline"
      viewBox="0 0 1600 220"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="marifa-nebula-l" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.42" />
          <stop offset="55%" stopColor="#2563EB" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#03050C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="marifa-nebula-r" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.38" />
          <stop offset="55%" stopColor="#10B981" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#03050C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beam" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#60A5FA" stopOpacity="0.38" />
          <stop offset="0.5" stopColor="#C084FC" stopOpacity="0.18" />
          <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="280" cy="112" rx="260" ry="88" fill="url(#marifa-nebula-l)" />
      <ellipse cx="1310" cy="104" rx="270" ry="92" fill="url(#marifa-nebula-r)" />

      <path
        className="night__beam"
        d="M800 108L1380 28L1380 188Z"
        fill="url(#beam)"
        style={{ transformOrigin: '800px 108px' }}
      />

      {/* Geometric Constellations */}
      <g stroke="#94A3B8" strokeWidth="1.1" strokeDasharray="4 5" fill="none" opacity="0.48">
        <path d="M72 48L138 118L214 66L292 148L364 54L432 126M214 66L364 54" />
        <path d="M518 42L588 96L662 158L736 52L812 134L886 44L954 116L1032 62M588 96L736 52L886 44" />
        <path d="M1108 152L1184 48L1262 124L1344 58L1422 142L1506 64M1184 48L1344 58L1506 64" />
      </g>

      {/* Left Abstract Spiral Galaxy */}
      <g transform="translate(260 112) rotate(-16)" fill="none">
        <ellipse rx="118" ry="36" stroke="#6D28D9" strokeWidth="1.8" strokeDasharray="6 5" opacity="0.75" />
        <ellipse rx="76" ry="23" stroke="#2563EB" strokeWidth="1.6" opacity="0.85" />
        <ellipse rx="38" ry="11" stroke="#F59E0B" strokeWidth="1.4" opacity="0.9" />
        <circle r="6" fill="#F59E0B" />
        <circle cx="-64" cy="12" r="3.5" fill="#10B981" />
        <circle cx="58" cy="-10" r="3.5" fill="#E11D48" />
      </g>

      {/* Central Celestial Supercluster & Astrolabe */}
      <g transform="translate(800 108)" fill="none">
        <circle r="74" stroke="#2563EB" strokeWidth="1.4" strokeDasharray="5 5" opacity="0.65" />
        <circle r="46" stroke="#6D28D9" strokeWidth="1.4" opacity="0.75" />
        <ellipse rx="142" ry="34" transform="rotate(-12)" stroke="#60A5FA" strokeWidth="1.5" opacity="0.7" />
        <ellipse rx="142" ry="34" transform="rotate(18)" stroke="#C084FC" strokeWidth="1.3" strokeDasharray="4 6" opacity="0.65" />
        <polygon points="0,-22 19,0 0,22 -19,0" stroke="#F59E0B" strokeWidth="1.5" opacity="0.85" />
        <circle className="night__beacon" r="6" fill="#F59E0B" />
      </g>

      {/* Right Spiral Galaxy */}
      <g transform="translate(1330 102) rotate(14)" fill="none">
        <ellipse rx="124" ry="38" stroke="#2563EB" strokeWidth="1.8" strokeDasharray="7 5" opacity="0.75" />
        <ellipse rx="80" ry="24" stroke="#10B981" strokeWidth="1.6" opacity="0.82" />
        <ellipse rx="36" ry="11" stroke="#F59E0B" strokeWidth="1.4" opacity="0.9" />
        <circle className="night__beacon" r="5.5" fill="#60A5FA" />
        <circle cx="-72" cy="-8" r="3.5" fill="#F59E0B" />
        <circle cx="68" cy="10" r="3.5" fill="#E11D48" />
      </g>

      {/* Twinkling Starfield Nodes */}
      <g className="night__windows">
        {starField.map(([x, y, scale], idx) => (
          <g key={idx} transform={`translate(${x} ${y})`}>
            <circle r={scale * 2.8} fill={palette[idx % 5]} opacity="0.24" />
            <rect
              x={-1.8}
              y={-1.8}
              width="3.6"
              height="3.6"
              rx="1.8"
              fill="#F8FAFC"
              style={{ animationDelay: `${(idx * 0.37) % 4}s` }}
            />
          </g>
        ))}
      </g>

      {/* Celestial Horizon Curve */}
      <path d="M0 216Q400 198 800 212T1600 216L1600 220L0 220Z" fill="#03050C" />
      <path d="M0 216Q400 198 800 212T1600 216" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.55" />

      {[160, 460, 800, 1140, 1440].map((cx, idx) => (
        <circle
          key={cx}
          className="night__boat"
          cx={cx}
          cy={[188, 176, 192, 178, 186][idx]}
          r="3.8"
          fill={palette[idx % 5]}
          style={{ animationDelay: `${idx * 0.4}s` }}
        />
      ))}
    </svg>
  );
};

const SCENE_BY_KIND: Record<TimelinePhase['kind'], React.FC> = {
  think: AyatDawnScene,
  build: FikrNoonScene,
  ship: BasiraDuskScene,
  scale: MarifaNightScene,
};

export const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="journey"
      aria-label="Ayatic Codex · Journey"
    >
      <div className="journey__pin">
        <button
          className="journey__sun"
          type="button"
          aria-label="The sun"
          data-flower
        >
          <span className="journey__sun-glow" />
        </button>

        <div className="journey__track">
          {TIMELINE_PHASES.map((phase) => {
            const SceneComponent = SCENE_BY_KIND[phase.kind];
            return (
              <article
                key={phase.kind}
                className={`chapter chapter--${phase.kind}`}
                style={{ '--c': phase.teamColorVar } as React.CSSProperties}
                aria-labelledby={`chapter-${phase.kind}`}
              >
                <div className="chapter__copy">
                  <div className="chapter__meta" data-reveal>
                    <span
                      className="chapter__glyph"
                      data-flower={phase.kind === 'ship' ? '' : undefined}
                    />
                    <span className="chapter__kicker">
                      <span className="chapter__verb">{phase.verb}</span>
                      <span className="eyebrow">
                        {phase.time} · {phase.place}
                      </span>
                    </span>
                  </div>

                  <h2
                    id={`chapter-${phase.kind}`}
                    className="chapter__title"
                    data-reveal
                  >
                    {phase.title}
                  </h2>

                  <p className="chapter__body" data-reveal>
                    {phase.body}
                  </p>

                  <ul className="chapter__points" data-reveal>
                    {phase.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="chapter__scene">
                  <SceneComponent />
                </div>
              </article>
            );
          })}
        </div>

        <div className="journey__clock" aria-hidden="true">
          <span className="eyebrow">Ayatic Codex</span>
          <span className="journey__time">06:00</span>
          <span className="journey__bar">
            <span className="journey__fill" />
            {TIMELINE_PHASES.map((phase, idx) => (
              <span
                key={phase.kind}
                className="journey__tick"
                style={{
                  left: `${(idx / 3) * 100}%`,
                  background: phase.teamColorVar,
                }}
              />
            ))}
            <span className="journey__dot" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
