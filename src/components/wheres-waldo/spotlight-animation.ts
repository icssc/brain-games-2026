const ARC_SAMPLES = 1000;

const lemniscatePoint = (t: number) => {
  const sinT = Math.sin(t);
  const cosT = Math.cos(t);
  const denom = 1 + sinT * sinT;
  return { x: cosT / denom, y: (sinT * cosT) / denom };
};

const arcLengthTable: { t: number; len: number }[] = [];
(() => {
  let totalLen = 0;
  let prev = lemniscatePoint(0);
  arcLengthTable.push({ t: 0, len: 0 });
  for (let i = 1; i <= ARC_SAMPLES; i++) {
    const t = (i / ARC_SAMPLES) * Math.PI * 2;
    const pt = lemniscatePoint(t);
    const dx = pt.x - prev.x;
    const dy = pt.y - prev.y;
    totalLen += Math.sqrt(dx * dx + dy * dy);
    arcLengthTable.push({ t, len: totalLen });
    prev = pt;
  }
  for (const entry of arcLengthTable) entry.len /= totalLen;
})();

export const uniformT = (d: number) => {
  const wrapped = ((d % 1) + 1) % 1;
  let lo = 0;
  let hi = arcLengthTable.length - 1;
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1;
    if (arcLengthTable[mid].len < wrapped) lo = mid;
    else hi = mid;
  }
  const a = arcLengthTable[lo];
  const b = arcLengthTable[hi];
  const frac = b.len === a.len ? 0 : (wrapped - a.len) / (b.len - a.len);
  return a.t + frac * (b.t - a.t);
};

export { lemniscatePoint };
