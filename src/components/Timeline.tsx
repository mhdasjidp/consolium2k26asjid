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

/**
 * Phase 1: Observation (Ayat) - 06:00
 * Concept: The Dawn of Perception.
 * A single, expansive, ultra-thin geometric eye paired with a continuous organic
 * Fibonacci spiral unfurling smoothly from the bottom left.
 */
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
    <SceneSvg label="06:00 · Observation (Ayat) — The Dawn of Perception">
      <defs>
        <radialGradient id="ayat-dawn-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.14" />
          <stop offset="60%" stopColor="#10B981" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #1e2a3a)' }}>
        {/* Ambient Dawn Perception Glow */}
        <circle
          className="codex-breathe animate-pulse [animation-duration:15s]"
          cx="1020"
          cy="340"
          r="320"
          fill="url(#ayat-dawn-glow)"
        />

        {/* Continuous Organic Fibonacci Spiral Unfurling from Bottom-Left */}
        <path
          className="codex-breathe"
          d="M 120 660
             C 240 520, 460 440, 720 430
             C 940 422, 1140 380, 1160 280
             C 1175 205, 1085 165, 995 190
             C 925 210, 895 285, 935 345
             C 962 385, 1020 392, 1052 360
             C 1074 338, 1068 305, 1040 298
             C 1022 294, 1012 310, 1020 325"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeLinecap="round"
        />
        <path
          d="M 180 680
             C 340 540, 610 465, 880 435
             C 1060 415, 1210 345, 1190 245"
          fill="none"
          stroke="#10B981"
          strokeWidth="0.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />

        {/* Expansive Ultra-Thin Geometric Eye of Perception */}
        <g transform="translate(1020 340)">
          {/* Outer Eye Envelope */}
          <path
            d="M -420 0 C -210 -195, 210 -195, 420 0 C 210 195, -210 195, -420 0 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          <path
            d="M -340 0 C -170 -135, 170 -135, 340 0 C 170 135, -170 135, -340 0 Z"
            fill="none"
            stroke="#10B981"
            strokeWidth="0.5"
            strokeOpacity="0.28"
          />

          {/* Slowly Rotating Geometric Iris Wireframe */}
          <g className="codex-spin animate-[spin_15s_linear_infinite]">
            <circle
              r="132"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <circle
              r="88"
              fill="none"
              stroke="#10B981"
              strokeWidth="1"
              strokeOpacity="0.26"
            />
            <ellipse
              rx="132"
              ry="54"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <ellipse
              rx="132"
              ry="54"
              transform="rotate(60)"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <ellipse
              rx="132"
              ry="54"
              transform="rotate(-60)"
              fill="none"
              stroke="#10B981"
              strokeWidth="0.5"
              strokeOpacity="0.24"
            />
          </g>

          {/* Minimalist Central Pupil */}
          <circle
            r="28"
            fill="none"
            stroke="#10B981"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />
          <circle r="3.5" fill="#10B981" fillOpacity="0.7" />
        </g>
      </g>
    </SceneSvg>
  );
};

/**
 * Phase 2: Contemplation (Fikr) - 12:00
 * Concept: The Biological Code.
 * A minimalist, continuous-line rendering of a massive, symmetric DNA double helix
 * with glowing intersection points where the strands cross.
 */
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

  // Crossing points along the symmetric double helix
  const crossings = [420, 660, 900, 1140, 1380];
  // Base-pair rung positions between crossings
  const rungs: [number, number, number][] = [
    [300, 240, 460],
    [540, 240, 460],
    [780, 240, 460],
    [1020, 240, 460],
    [1260, 240, 460],
  ];

  return (
    <SceneSvg label="12:00 · Contemplation (Fikr) — The Biological Code">
      <defs>
        <radialGradient id="fikr-helix-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.14" />
          <stop offset="60%" stopColor="#E11D48" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="helix-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#E11D48" stopOpacity="0" />
          <stop offset="22%" stopColor="#E11D48" stopOpacity="0.34" />
          <stop offset="85%" stopColor="#E11D48" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #1e2a3a)' }}>
        <ellipse
          className="codex-breathe animate-pulse [animation-duration:15s]"
          cx="900"
          cy="350"
          rx="520"
          ry="210"
          fill="url(#fikr-helix-glow)"
        />

        {/* Central Symmetry Axis */}
        <line
          x1="180"
          y1="350"
          x2="1500"
          y2="350"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.14"
        />

        {/* Harmonic Base-Pair Rungs at Crest Intervals */}
        <g className="codex-breathe">
          {rungs.map(([x, y1, y2]) => (
            <g key={x}>
              <line
                x1={x}
                y1={y1}
                x2={x}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.18"
              />
              <line
                x1={x - 48}
                y1={y1 + 26}
                x2={x - 48}
                y2={y2 - 26}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.12"
              />
              <line
                x1={x + 48}
                y1={y1 + 26}
                x2={x + 48}
                y2={y2 - 26}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.12"
              />
            </g>
          ))}
        </g>

        {/* Continuous Symmetric DNA Double Helix Strands */}
        <g className="codex-breathe">
          {/* Primary Strand A */}
          <path
            d="M 180 350
               C 240 190, 360 190, 420 350
               C 480 510, 600 510, 660 350
               C 720 190, 840 190, 900 350
               C 960 510, 1080 510, 1140 350
               C 1200 190, 1320 190, 1380 350
               C 1420 455, 1470 485, 1510 440"
            fill="none"
            stroke="url(#helix-fade)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 180 350
               C 240 190, 360 190, 420 350
               C 480 510, 600 510, 660 350
               C 720 190, 840 190, 900 350
               C 960 510, 1080 510, 1140 350
               C 1200 190, 1320 190, 1380 350
               C 1420 455, 1470 485, 1510 440"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* Complementary Strand B (Perfectly Mirrored) */}
          <path
            d="M 180 350
               C 240 510, 360 510, 420 350
               C 480 190, 600 190, 660 350
               C 720 510, 840 510, 900 350
               C 960 190, 1080 190, 1140 350
               C 1200 510, 1320 510, 1380 350
               C 1420 245, 1470 215, 1510 260"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />
        </g>

        {/* Glowing Intersection Points Where Strands Cross */}
        <g className="helix-nodes">
          {crossings.map((cx) => (
            <g key={cx} transform={`translate(${cx} 350)`}>
              <circle
                r="16"
                fill="none"
                stroke="#E11D48"
                strokeWidth="0.5"
                strokeOpacity="0.25"
              />
              <circle r="9" fill="#E11D48" fillOpacity="0.16" />
              <circle className="lit" r="3.2" fill="#E11D48" fillOpacity="0.85" />
            </g>
          ))}
        </g>
      </g>
    </SceneSvg>
  );
};

/**
 * Phase 3: Insight (Basira) - 16:00
 * Concept: The Cosmic Clock.
 * Abstract celestial mechanics — an astrolabe of smooth, intersecting ellipses
 * and concentric planetary orbits rotating slowly on a tilted axis, with a subtle
 * glow on the primary orbital path.
 */
export const BasiraDuskScene: React.FC = () => {
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
    <SceneSvg label="16:00 · Insight (Basira) — The Cosmic Clock">
      <defs>
        <radialGradient id="basira-cosmos-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.16" />
          <stop offset="55%" stopColor="#6D28D9" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #231832)' }}>
        {/* Ambient Celestial Glow */}
        <circle
          className="codex-breathe animate-pulse [animation-duration:15s]"
          cx="980"
          cy="340"
          r="330"
          fill="url(#basira-cosmos-glow)"
        />

        {/* Tilted Celestial Astrolabe Assembly */}
        <g transform="translate(980 340) rotate(-18)">
          {/* Concentric Planetary Orbits */}
          <circle
            r="260"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.18"
          />
          <circle
            r="190"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.22"
          />
          <circle
            r="120"
            fill="none"
            stroke="#2563EB"
            strokeWidth="0.5"
            strokeOpacity="0.28"
          />
          <circle
            r="56"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.22"
          />

          {/* Subtle Glow on Primary Orbital Path */}
          <ellipse
            rx="380"
            ry="112"
            fill="none"
            stroke="#2563EB"
            strokeWidth="4"
            strokeOpacity="0.12"
            filter="url(#sc-soft)"
          />
          <ellipse
            rx="380"
            ry="112"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1"
            strokeOpacity="0.42"
          />

          {/* Slowly Rotating Intersecting Ellipses */}
          <g className="codex-spin animate-[spin_15s_linear_infinite]">
            <ellipse
              rx="310"
              ry="92"
              transform="rotate(28)"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.22"
            />
            <ellipse
              rx="310"
              ry="92"
              transform="rotate(-28)"
              fill="none"
              stroke="#2563EB"
              strokeWidth="0.5"
              strokeOpacity="0.28"
            />
            <ellipse
              rx="230"
              ry="148"
              transform="rotate(64)"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.18"
            />
            <ellipse
              rx="230"
              ry="148"
              transform="rotate(-64)"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.18"
            />
          </g>

          {/* Minimalist Celestial Equilibrium Axis */}
          <line
            x1="-420"
            y1="0"
            x2="420"
            y2="0"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />
          <line
            x1="0"
            y1="-280"
            x2="0"
            y2="280"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />

          {/* Quiet Center Singularity */}
          <circle r="10" fill="#2563EB" fillOpacity="0.18" />
          <circle r="3" fill="#2563EB" fillOpacity="0.85" />
        </g>
      </g>
    </SceneSvg>
  );
};

/**
 * Phase 4: Zenith (Marifa) - 20:00
 * Concept: The Boundless Matrix.
 * A pristine, deep-space aesthetic featuring a vast, subtle celestial grid and
 * a delicate constellation web connecting a few sparse, softly glowing stellar nodes.
 */
export const MarifaNightScene: React.FC = () => {
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

  // Sparse, thoughtfully placed stellar nodes across the deep-space matrix
  const stellarNodes: [number, number, string, number][] = [
    [520, 250, '#F59E0B', 2.8],
    [710, 175, '#F8FAFC', 2.2],
    [860, 295, '#6D28D9', 3.0],
    [1040, 195, '#F59E0B', 3.4],
    [1190, 330, '#F8FAFC', 2.4],
    [960, 445, '#2563EB', 2.6],
    [1360, 225, '#F59E0B', 2.8],
    [1440, 390, '#F8FAFC', 2.2],
  ];

  return (
    <SceneSvg label="20:00 · Zenith (Marifa) — The Boundless Matrix">
      <defs>
        <radialGradient id="marifa-zenith-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="55%" stopColor="#6D28D9" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#03050C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g ref={sceneRef} style={{ color: 'var(--scene-ink, #d8e2f0)' }}>
        {/* Deep-Space Zenith Glow */}
        <circle
          className="codex-breathe animate-pulse [animation-duration:15s]"
          cx="1040"
          cy="300"
          r="360"
          fill="url(#marifa-zenith-glow)"
        />

        {/* Vast, Subtle Deep-Space Coordinate Matrix Grid */}
        <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.12" fill="none">
          {/* Smooth Curved Celestial Latitudes */}
          <path d="M 160 190 Q 880 130 1520 210" />
          <path d="M 120 320 Q 880 260 1540 340" />
          <path d="M 80 460 Q 880 400 1560 480" />
          <path d="M 40 590 Q 880 540 1580 600" />
          {/* Converging Celestial Longitudes */}
          <line x1="480" y1="110" x2="360" y2="610" />
          <line x1="760" y1="95" x2="700" y2="610" />
          <line x1="1040" y1="95" x2="1040" y2="610" />
          <line x1="1320" y1="110" x2="1400" y2="610" />
        </g>

        {/* Slowly Rotating Zenith Horizon Ring */}
        <g transform="translate(1040 295)">
          <g className="codex-spin animate-[spin_15s_linear_infinite]">
            <circle
              r="210"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.16"
            />
            <ellipse
              rx="210"
              ry="68"
              transform="rotate(-15)"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="0.5"
              strokeOpacity="0.24"
            />
          </g>
        </g>

        {/* Delicate Continuous Constellation Web */}
        <g className="codex-breathe" fill="none">
          <path
            d="M 520 250 L 710 175 L 860 295 L 1040 195 L 1190 330 L 1360 225 L 1440 390"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.24"
          />
          <path
            d="M 710 175 L 1040 195 L 1360 225 M 860 295 L 960 445 L 1190 330"
            stroke="#F59E0B"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </g>

        {/* Sparse, Softly Glowing Stellar Nodes */}
        <g className="stellar-nodes">
          {stellarNodes.map(([cx, cy, color, r], idx) => (
            <g key={idx} transform={`translate(${cx} ${cy})`}>
              <circle
                r={r * 4.5}
                fill="none"
                stroke={color}
                strokeWidth="0.5"
                strokeOpacity="0.22"
              />
              <circle r={r * 2.5} fill={color} fillOpacity="0.14" />
              <circle className="lit" r={r} fill={color} fillOpacity="0.9" />
            </g>
          ))}
        </g>
      </g>
    </SceneSvg>
  );
};

/**
 * Bottom Deep-Space Expanse Graphic (Zenith / Marifa)
 * Replaces the original dark Kochi nighttime skyline (lighthouse, bridge, cranes, and buildings)
 * while maintaining identical dimensions (viewBox="0 0 1600 220") and responsive classes (.night__skyline).
 */
const CODEX_PARTICLES = Array.from({ length: 36 }, (_, idx) => {
  const seed = (idx * 9301 + 49297) % 233280;
  const n1 = seed / 233280;
  const n2 = ((seed * 7 + 131) % 233280) / 233280;
  const n3 = ((seed * 13 + 7919) % 233280) / 233280;
  return {
    id: idx,
    bx: Math.round(45 + ((idx + 0.35) / 36) * 1510 + (n1 - 0.5) * 28),
    by: Math.round(18 + n2 * 168),
    r: Number((1.1 + (idx % 4) * 0.45).toFixed(2)),
    depth: Number((0.4 + n3 * 0.95).toFixed(2)),
    phase: Number((idx * 0.85).toFixed(2)),
    speed: Number((0.45 + (idx % 5) * 0.16).toFixed(2)),
    colorIdx: idx % 5,
  };
});

export const NightSkyline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const particleRefs = useRef<(SVGGElement | null)[]>([]);
  const linksRef = useRef<SVGPathElement | null>(null);
  const auraRef = useRef<SVGCircleElement | null>(null);

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

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let inView = true;
    const pointer = {
      tx: 0,
      ty: 0,
      cx: 0,
      cy: 0,
      svgX: 800,
      svgY: 110,
      curSvgX: 800,
      curSvgY: 110,
      active: false,
    };

    const onPointerMove = (e: PointerEvent) => {
      const vw = Math.max(1, window.innerWidth);
      const vh = Math.max(1, window.innerHeight);
      pointer.tx = (e.clientX / vw - 0.5) * 2;
      pointer.ty = (e.clientY / vh - 0.5) * 2;
      pointer.svgX = (e.clientX / vw) * 1600;
      const rect = svg.getBoundingClientRect();
      if (rect.height > 0) {
        const relY = (e.clientY - rect.top) / rect.height;
        pointer.svgY = Math.max(-60, Math.min(280, relY * 220));
      } else {
        pointer.svgY = (e.clientY / vh) * 220;
      }
      pointer.active = true;
    };

    const tick = (now: number) => {
      const t = now * 0.001;
      pointer.cx += (pointer.tx - pointer.cx) * 0.075;
      pointer.cy += (pointer.ty - pointer.cy) * 0.075;
      pointer.curSvgX += (pointer.svgX - pointer.curSvgX) * 0.09;
      pointer.curSvgY += (pointer.svgY - pointer.curSvgY) * 0.09;

      const coords: [number, number][] = [];
      let linkPath = '';

      for (let i = 0; i < CODEX_PARTICLES.length; i++) {
        const p = CODEX_PARTICLES[i];
        const node = particleRefs.current[i];
        const driftX = Math.cos(t * p.speed + p.phase) * (4.5 * p.depth);
        const driftY = Math.sin(t * (p.speed * 0.85) + p.phase) * (3.2 * p.depth);
        const parallaxX = pointer.cx * 26 * p.depth;
        const parallaxY = pointer.cy * 12 * p.depth;

        let x = p.bx + driftX + parallaxX;
        let y = p.by + driftY + parallaxY;
        let scale = 1;

        if (pointer.active) {
          const dx = x - pointer.curSvgX;
          const dy = y - pointer.curSvgY;
          const dist = Math.hypot(dx, dy);
          const radius = 210;
          if (dist < radius && dist > 0.01) {
            const force = (1 - dist / radius) * 18 * p.depth;
            const angle = Math.atan2(dy, dx) + 0.35 * (1 - dist / radius);
            x += Math.cos(angle) * force;
            y += Math.sin(angle) * force;
            scale = 1 + (1 - dist / radius) * 0.55;
          }
        }

        coords.push([x, y]);
        if (node) {
          node.setAttribute(
            'transform',
            `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${scale.toFixed(2)})`
          );
        }
      }

      if (pointer.active) {
        for (let i = 0; i < coords.length; i++) {
          const [x1, y1] = coords[i];
          const dCursor = Math.hypot(x1 - pointer.curSvgX, y1 - pointer.curSvgY);
          if (dCursor < 220) {
            for (let j = i + 1; j < coords.length; j++) {
              const [x2, y2] = coords[j];
              const dPair = Math.hypot(x1 - x2, y1 - y2);
              if (dPair < 135) {
                linkPath += `M${x1.toFixed(1)},${y1.toFixed(1)}L${x2.toFixed(1)},${y2.toFixed(1)}`;
              }
            }
          }
        }
      }

      if (linksRef.current) {
        linksRef.current.setAttribute('d', linkPath);
      }
      if (auraRef.current) {
        auraRef.current.setAttribute('cx', pointer.curSvgX.toFixed(1));
        auraRef.current.setAttribute('cy', pointer.curSvgY.toFixed(1));
        auraRef.current.setAttribute('opacity', pointer.active ? '0.65' : '0');
      }

      if (inView) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              inView = entry.isIntersecting;
              window.cancelAnimationFrame(rafId);
              if (inView) {
                rafId = window.requestAnimationFrame(tick);
              }
            },
            { threshold: 0.01 }
          )
        : null;

    observer?.observe(svg);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer?.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
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
        <radialGradient id="codex-cursor-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#6D28D9" stopOpacity="0.1" />
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
      <circle
        ref={auraRef}
        cx="800"
        cy="110"
        r="165"
        fill="url(#codex-cursor-aura)"
        opacity="0"
      />

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

      {/* Interactive Ayatic Codex Particle System & Dynamic Constellation Filaments */}
      <path
        ref={linksRef}
        className="night__codex-links"
        d=""
        fill="none"
        stroke="#60A5FA"
        strokeWidth="0.9"
        strokeDasharray="3 4"
        opacity="0.42"
      />
      <g className="night__particles">
        {CODEX_PARTICLES.map((p, idx) => (
          <g
            key={p.id}
            ref={(el) => {
              particleRefs.current[idx] = el;
            }}
            transform={`translate(${p.bx} ${p.by})`}
          >
            <circle
              r={p.r * 3.1}
              fill={palette[p.colorIdx]}
              opacity="0.2"
            />
            <circle
              r={p.r}
              fill={idx % 3 === 0 ? '#F8FAFC' : palette[p.colorIdx]}
              opacity="0.88"
            />
          </g>
        ))}
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
