export const BG_LAYER_DEFS: { name: string; zIndex: number }[] = [
  { name: "disco-background", zIndex: 0 },
  { name: "dj-set", zIndex: 3 },
  { name: "icssc-banner", zIndex: 4 },
  { name: "brain-games-banner", zIndex: 4 },
  { name: "light-right", zIndex: 5 },
  { name: "light-left", zIndex: 6 },
  { name: "light-streamer", zIndex: 7 },
  { name: "background-3", zIndex: 1 },
  { name: "background-4", zIndex: 17 },
  { name: "background-5", zIndex: 18 },
  { name: "background-6", zIndex: 19 },
  { name: "sparkles-1", zIndex: 19 },
  { name: "disco-ball", zIndex: 17 },
];

export const LAYER_OPACITY: Record<string, number> = {
  "light-right": 0.5,
  "light-streamer": 0.1,
  "background-3": 0.3,
  "background-4": 0.3,
  "background-5": 0.5,
  "background-6": 0.8,
};

export const DARKENING_LAYERS = new Set([
  "background-4",
  "background-5",
  "background-6",
]);

export type Character = {
  name: string;
  src: string;
  top: string;
  left: string;
  h: string;
  zIndex: number;
  isWaldo?: boolean;
};

export const CHARACTERS: Character[] = [
  {
    name: "waldo-petr",
    src: "/wheres-waldo/waldo-petr.png",
    top: "59%",
    left: "62%",
    h: "45%",
    zIndex: 1,
    isWaldo: true,
  },
  {
    name: "dj-petr",
    src: "/wheres-waldo/dj-petr.png",
    top: "55%",
    left: "40%",
    h: "43%",
    zIndex: 2,
  },
  {
    name: "ghost-petr",
    src: "/wheres-waldo/ghost-petr.png",
    top: "72%",
    left: "82%",
    h: "46%",
    zIndex: 8,
  },
  {
    name: "chicken-petr",
    src: "/wheres-waldo/chicken-petr.png",
    top: "73%",
    left: "94.5%",
    h: "45%",
    zIndex: 9,
  },
  {
    name: "toucan-petr",
    src: "/wheres-waldo/toucan-petr.png",
    top: "17%",
    left: "76%",
    h: "40%",
    zIndex: 10,
  },
  {
    name: "ped-light-year-petr",
    src: "/wheres-waldo/ped-light-year-petr.png",
    top: "70%",
    left: "18%",
    h: "46%",
    zIndex: 11,
  },
  {
    name: "saxy-petr",
    src: "/wheres-waldo/saxy-petr.png",
    top: "72%",
    left: "67%",
    h: "45%",
    zIndex: 12,
  },
  {
    name: "rgb-nerd-petr",
    src: "/wheres-waldo/rgb-nerd-petr.png",
    top: "73%",
    left: "7%",
    h: "45%",
    zIndex: 13,
  },
  {
    name: "party-petr",
    src: "/wheres-waldo/party-petr.png",
    top: "76%",
    left: "29%",
    h: "44%",
    zIndex: 14,
  },
  {
    name: "clown-petr",
    src: "/wheres-waldo/clown-petr.png",
    top: "87%",
    left: "18%",
    h: "35%",
    zIndex: 15,
  },
  {
    name: "rice-petr",
    src: "/wheres-waldo/rice-petr.png",
    top: "72%",
    left: "52%",
    h: "45%",
    zIndex: 16,
  },
];

export const SPOTLIGHT_PCT = 20;
export const BEAM_SOURCE_X = 1.0;
export const BEAM_SOURCE_Y = 0.8;
export const BEAM_SOURCE_SPREAD = 0.2;
export const BEAM_OPACITY = 0.3;
export const LOOP_DURATION = 12000;

export const DANCE_SPEED = 2.25;
export const DANCE_X = 0.3;
export const DANCE_Y = 0.5;
export const DANCE_ROT = 1.5;

export const WALDO_CHAR = CHARACTERS.find((c) => c.isWaldo)!;
export const WALDO_PEEK_PCT = 6;
export const WALDO_SOLO_DURATION = 1200;
export const WALDO_SOLO_BOUNCES = 2;
export const WALDO_SOLO_AMP = 5;
export const CELEBRATE_DURATION = 1800;
export const CELEBRATE_BOUNCES = 3;
export const CELEBRATE_AMP = 3;
export const WALDO_DETECT_RADIUS = 1.3;
export const WALDO_CENTER_X = parseFloat(WALDO_CHAR.left) / 100;

export const BG_LAYERS = BG_LAYER_DEFS.map(({ name, zIndex }) => ({
  src: `/wheres-waldo/${name}.png`,
  alt: `Background layer ${name}`,
  zIndex,
  opacity: LAYER_OPACITY[name] ?? 1,
  isDarkening: DARKENING_LAYERS.has(name),
}));
