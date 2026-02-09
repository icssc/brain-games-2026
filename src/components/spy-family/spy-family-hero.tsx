"use client";

import { BrainGamesHeader } from "../ui/header";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { AquariumBackground } from "./aquarium-background";
import { SwimmingCharacters } from "./swimming-characters";
import { Onlookers } from "./onlookers";

export function SpyFamilyHero() {
  const scrollY = useScrollPosition();

  return (
    <div className="relative w-full h-[100vh] lg:h-[400vh]">
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <AquariumBackground scrollY={scrollY} />
        <div className="relative h-full w-full">
          <BrainGamesHeader scrollY={scrollY} />
          <div className="hidden lg:block">
            <SwimmingCharacters scrollY={scrollY} />
            <Onlookers scrollY={scrollY} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpyFamilyHero;
