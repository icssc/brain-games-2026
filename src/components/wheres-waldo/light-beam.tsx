"use client";

import Image from "next/image";
import {
  BG_LAYERS,
  CHARACTERS,
  BEAM_SOURCE_X,
  BEAM_SOURCE_Y,
  BEAM_SOURCE_SPREAD,
  BEAM_OPACITY,
} from "./config";

interface LightBeamProps {
  containerSize: { w: number; h: number };
  lightPos: { x: number; y: number };
  spotlightRadius: number;
  waldoTranslateY: number;
  waldoFound: boolean;
  danceTransform: (i: number) => string | undefined;
}

export function LightBeam({
  containerSize,
  lightPos,
  spotlightRadius,
  waldoTranslateY,
  waldoFound,
  danceTransform,
}: LightBeamProps) {
  const sx = containerSize.w * BEAM_SOURCE_X;
  const sy = containerSize.h * BEAM_SOURCE_Y;
  const halfSpread = (containerSize.h * BEAM_SOURCE_SPREAD) / 2;
  const s1y = sy - halfSpread;
  const s2y = sy + halfSpread;
  const cx = lightPos.x;
  const cy = lightPos.y;
  const r = spotlightRadius;

  const tangentPoint = (px: number, py: number, pickUpper: boolean) => {
    const dx = cx - px;
    const dy = cy - py;
    const D = Math.sqrt(dx * dx + dy * dy);
    if (D <= r) return null;
    const theta = Math.atan2(dy, dx);
    const alpha = Math.acos(Math.max(-1, Math.min(1, -r / D)));
    const a = {
      x: cx + r * Math.cos(theta + alpha),
      y: cy + r * Math.sin(theta + alpha),
    };
    const b = {
      x: cx + r * Math.cos(theta - alpha),
      y: cy + r * Math.sin(theta - alpha),
    };
    return pickUpper ? (a.y < b.y ? a : b) : a.y > b.y ? a : b;
  };

  const t1 = tangentPoint(sx, s1y, true);
  const t2 = tangentPoint(sx, s2y, false);
  if (!t1 || !t2) return null;

  const svgPts = `${sx},${s1y} ${t1.x},${t1.y} ${t2.x},${t2.y} ${sx},${s2y}`;
  const beamPath = `M ${sx} ${s1y} L ${t1.x} ${t1.y} L ${t2.x} ${t2.y} L ${sx} ${s2y} Z M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;

  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          clipPath: `path(evenodd, "${beamPath}")`,
        }}
      >
        {BG_LAYERS.map((layer) => (
          <Image
            key={`beam-${layer.src}`}
            src={layer.src}
            alt={layer.alt}
            fill
            className="object-cover pointer-events-none"
            style={{
              zIndex: layer.zIndex,
              opacity: layer.isDarkening ? 0 : layer.opacity,
            }}
          />
        ))}
        {CHARACTERS.map((char, i) => (
          <Image
            key={`beam-${char.name}`}
            src={char.src}
            alt={char.name}
            width={400}
            height={400}
            className={`absolute pointer-events-none ${!char.isWaldo ? "-translate-x-1/2 -translate-y-1/2" : ""} ${char.isWaldo && !waldoFound ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              top: char.top,
              left: char.left,
              height: char.h,
              width: "auto",
              zIndex: char.zIndex,
              transform: char.isWaldo
                ? `translate(-50%, -50%) translateY(${waldoTranslateY}%)`
                : danceTransform(i),
            }}
          />
        ))}
      </div>
      <svg
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 97, mixBlendMode: "screen" }}
        width={containerSize.w}
        height={containerSize.h}
        viewBox={`0 0 ${containerSize.w} ${containerSize.h}`}
      >
        <defs>
          <filter id="beam-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <mask id="beam-mask">
            <polygon points={svgPts} fill="white" filter="url(#beam-soft)" />
            <circle cx={cx} cy={cy} r={r} fill="black" />
          </mask>
          <linearGradient
            id="beam-grad"
            x1={sx}
            y1={sy}
            x2={cx}
            y2={cy}
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor={`rgba(255, 160, 40, ${BEAM_OPACITY})`}
            />
            <stop offset="100%" stopColor="rgba(255, 120, 20, 0)" />
          </linearGradient>
          <linearGradient
            id="beam-glare"
            x1={sx}
            y1={sy}
            x2={cx}
            y2={cy}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(255, 140, 30, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 100, 10, 0)" />
          </linearGradient>
        </defs>
        <g mask="url(#beam-mask)">
          <rect
            width={containerSize.w}
            height={containerSize.h}
            fill="url(#beam-grad)"
          />
          <rect
            width={containerSize.w}
            height={containerSize.h}
            fill="url(#beam-glare)"
          />
        </g>
      </svg>
    </>
  );
}
