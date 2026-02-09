"use client";

import Image from "next/image";
import { BG_LAYERS } from "./config";

export function DiscoBackground() {
  return (
    <>
      {BG_LAYERS.map((layer) => (
        <Image
          key={layer.src}
          src={layer.src}
          alt={layer.alt}
          fill
          className="object-cover pointer-events-none"
          style={{ zIndex: layer.zIndex, opacity: layer.opacity }}
          priority={layer.zIndex < 3}
        />
      ))}
    </>
  );
}
