"use client";

import Image from "next/image";
import {
  calculateSwimTransform,
  calculateWobbleRotation,
} from "./animation-utils";

interface SwimmingCharactersProps {
  scrollY: number;
}

const CHARACTERS = [
  {
    src: "/spy-family/aquarium-loid.png",
    alt: "Loid Forger",
    left: "68%",
    top: "67%",
    wobbleOffset: 0,
  },
  {
    src: "/spy-family/aquarium-perpetrator.png",
    alt: "Perpetrator",
    left: "50%",
    top: "57%",
    wobbleOffset: 2,
  },
  {
    src: "/spy-family/aquarium-penguin.png",
    alt: "Penguin",
    left: "35%",
    top: "40%",
    wobbleOffset: 4,
  },
] as const;

export function SwimmingCharacters({ scrollY }: SwimmingCharactersProps) {
  const swimStyle = calculateSwimTransform(scrollY);

  return (
    <div
      className="absolute inset-0 transition-transform duration-100 pointer-events-none"
      style={swimStyle}
    >
      {CHARACTERS.map((character) => (
        <Image
          key={character.src}
          src={character.src}
          alt={character.alt}
          className="absolute pointer-events-none h-auto lg:w-[200px] xl:w-[300px]"
          width={300}
          height={300}
          style={{
            left: character.left,
            top: character.top,
            transform: `translate(-50%, -50%) rotate(${calculateWobbleRotation(scrollY, character.wobbleOffset)}deg)`,
          }}
        />
      ))}
    </div>
  );
}
