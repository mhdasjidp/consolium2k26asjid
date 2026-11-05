export interface TeamTheme {
  id: string;
  cssVar: string;
  key: 'cosmix' | 'scale' | 'think' | 'build' | 'ship';
  name: string;
  hex: string;
  ink: string;
  label: string;
}

export const TEAM_COLORS: Record<string, TeamTheme> = {
  'team-purple': {
    id: 'team-purple',
    cssVar: '--team-purple',
    key: 'cosmix',
    name: 'LA-COSMIX',
    hex: '#6D28D9',
    ink: '#ffffff',
    label: 'Royal Purple',
  },
  'team-red': {
    id: 'team-red',
    cssVar: '--team-red',
    key: 'scale',
    name: 'Al-Cognix',
    hex: '#E11D48',
    ink: '#ffffff',
    label: 'Crimson Red',
  },
  'team-blue': {
    id: 'team-blue',
    cssVar: '--team-blue',
    key: 'think',
    name: 'EL-CLARIX',
    hex: '#2563EB',
    ink: '#ffffff',
    label: 'Cobalt Blue',
  },
  'team-green': {
    id: 'team-green',
    cssVar: '--team-green',
    key: 'build',
    name: 'LO-GLIFIX',
    hex: '#10B981',
    ink: '#0f172a',
    label: 'Emerald Green',
  },
  'team-yellow': {
    id: 'team-yellow',
    cssVar: '--team-yellow',
    key: 'ship',
    name: 'DER-ZENIX',
    hex: '#F59E0B',
    ink: '#202124',
    label: 'Mustard Yellow',
  },
};

export const TEAM_COLOR_ORDER = [
  TEAM_COLORS['team-purple'],
  TEAM_COLORS['team-red'],
  TEAM_COLORS['team-blue'],
  TEAM_COLORS['team-green'],
  TEAM_COLORS['team-yellow'],
] as const;

export const NAV_LINKS = [
  { id: 'home', num: '01', label: 'Home', href: '#top', to: '/', section: false },
  { id: 'journey', num: '02', label: 'results', href: '#journey', to: '/#journey', section: true },
  { id: 'race', num: '03', label: 'standings', href: '#race', to: '/#race', section: true },
  { id: 'thought', num: '04', label: 'schedule', href: '#thought', to: '/#thought', section: true },
  { id: 'contributors', num: '05', label: 'gallery', href: '#gallery', to: '/contributors', section: false },
  { id: 'speakers', num: '06', label: 'news', href: '#news', to: '/speakers', section: false },
  { id: 'team', num: '07', label: 'media', href: '#media', to: '/team', section: false },
  { id: 'register', num: '08', label: 'brochure', href: '#register', to: '/#register', section: true },
] as const;

export const EVENT_CONTENT = {
  brand: 'Consoulium 2k26',
  headline: 'Ayatic Codex',
  description:
    "Consoulium 2026 proudly unveils its theme, Ayatic Codex, shining a light on the intricate signs and divine patterns woven into the fabric of the universe. This theme invites us to look closer at creation—from the complex food webs of species and the delicate internal anatomies of living beings, to the majestic dance of atoms, galaxies, and superclusters. It reminds us of the precise, rhythmic turning of the cosmic clock and the rational harmony of ecosystems... all operating within profound codes and order. From an Islamic perspective, 'Ayatic Codex' draws on the Qur'anic truth that there are manifest signs (ayat) in the heavens and the earth for people of intellect and reflection. It reflects the wisdom that reaching the Creator does not require convoluted, mysterious arguments; rather, a moment of deep, sincere thought about the world around us is enough to guide us straight to our Rabb (Lord). Embracing this beautiful concept, we dive deep into the boundless ocean of knowledge and marvel at the craftsmanship of Ahsanul Khaliqin (The Best of Creators). Consoulium 2K26 aspires to inspire a faith rooted in the breathtaking codes of the universe, reminding us that true certainty begins with mindful observation.",
};
