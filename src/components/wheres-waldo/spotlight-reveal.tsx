"use client";

import Image from "next/image";
import { BG_LAYERS, CHARACTERS } from "./config";

interface SpotlightRevealProps {
  spotlightRadius: number;
  lightPos: { x: number; y: number };
  waldoTranslateY: number;
  waldoFound: boolean;
  danceTransform: (i: number) => string | undefined;
}

export function SpotlightReveal({
  spotlightRadius,
  lightPos,
  waldoTranslateY,
  waldoFound,
  danceTransform,
}: SpotlightRevealProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 50,
        clipPath: `circle(${spotlightRadius}px at ${lightPos.x}px ${lightPos.y}px)`,
      }}
    >
      {BG_LAYERS.map((layer) => (
        <Image
          key={`bright-${layer.src}`}
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
          key={`bright-${char.name}`}
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
  );
}
