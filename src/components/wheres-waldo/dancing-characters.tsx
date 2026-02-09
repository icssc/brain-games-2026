"use client";

import Image from "next/image";
import { CHARACTERS } from "./config";

interface DancingCharactersProps {
  waldoTranslateY: number;
  waldoFound: boolean;
  danceTransform: (i: number) => string | undefined;
}

export function DancingCharacters({
  waldoTranslateY,
  waldoFound,
  danceTransform,
}: DancingCharactersProps) {
  return (
    <>
      {CHARACTERS.map((char, i) => (
        <Image
          key={char.name}
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
    </>
  );
}
