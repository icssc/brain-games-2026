export function calculateZoomLevel(scrollY: number): number {
  const maxScroll = 700;
  const zoomProgress = Math.min(scrollY / maxScroll, 1);
  const scale = 1.25 - zoomProgress * 0.25;
  return scale;
}

export function calculateSwimTransform(scrollY: number) {
  const progress = scrollY / 1000;
  const moveX = progress * 300;
  const moveY = progress * 80 + Math.pow(progress, 2.5) * 60;

  const dx = 300;
  const dy = 80 + 2.5 * Math.pow(progress, 1.5) * 60;
  const baseAngle = -30;
  const angle = baseAngle + (Math.atan2(dy, dx) * 180) / Math.PI;

  return {
    transform: `translate(-${moveX}px, -${moveY}px) rotate(${angle}deg)`,
  };
}

export function calculateRevealProgress(scrollY: number): number {
  const startReveal = 1000;
  const endReveal = 1500;
  if (scrollY < startReveal) return 0;
  if (scrollY > endReveal) return 1;
  return (scrollY - startReveal) / (endReveal - startReveal);
}

export function calculateWobbleRotation(
  scrollY: number,
  offset: number = 0
): number {
  return Math.sin(scrollY / 80 + offset) * 2;
}
