"use client";

import Image from "next/image";
import { calculateRevealProgress } from "./animation-utils";

interface OnlookersProps {
  scrollY: number;
}

export function Onlookers({ scrollY }: OnlookersProps) {
  const revealProgress = calculateRevealProgress(scrollY);
  const slideOffset = (1 - revealProgress) * 150;

  return (
    <>
      <Image
        src="/spy-family/aquarium-onlookers-left-2.png"
        alt="Aquarium Onlookers"
        className="absolute bottom-[-1%] left-0 pointer-events-none hidden lg:block lg:w-[300px] lg:h-auto xl:w-[430px]"
        width={430}
        height={430}
        style={{
          opacity: revealProgress,
          transform: `translateX(-${slideOffset}px)`,
        }}
      />
      <Image
        src="/spy-family/aquarium-yor-anya.png"
        alt="Yor and Anya Forger"
        className="absolute bottom-0 right-0 pointer-events-none hidden lg:block lg:w-[500px] lg:h-auto xl:w-[700px]"
        width={700}
        height={700}
        style={{
          opacity: revealProgress,
          transform: `translateX(${slideOffset}px)`,
        }}
      />
    </>
  );
}
