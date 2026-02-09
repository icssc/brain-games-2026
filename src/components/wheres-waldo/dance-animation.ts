export const danceNoise = (t: number, seed: number) =>
  Math.sin(t * 1.7 + seed) * 0.5 +
  Math.sin(t * 0.9 + seed * 1.4) * 0.3 +
  Math.sin(t * 2.6 + seed * 0.8) * 0.2;
