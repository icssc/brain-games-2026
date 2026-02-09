"use client";

import Image from "next/image";
import { useState } from "react";
import { BrainGamesHeader } from "./braingames-header";

export function Perry() {
  const [isKicking, setIsKicking] = useState(false);
  const [showPow, setShowPow] = useState(false);

  const handlePerryClick = () => {
    setIsKicking(true);
    setTimeout(() => {
      setShowPow(true);
    }, 150);

    setTimeout(() => {
      setIsKicking(false);
      setShowPow(false);
    }, 1000);
  };

  return (
    <div className="relative w-full aspect-video bg-cover bg-center bg-no-repeat bg-[url('/perry-the-platypus/background.png')] overflow-hidden">
      {/* <Image
        src="/perry-the-platypus/background.png"
        alt="Perry"
        className="absolute top-[25%] left-[21%] -translate-x-1/2 -translate-y-1/2 pointer-events-none h-auto"
      /> */}
      <Image
        src="/perry-the-platypus/doofenshmirtz.png"
        alt="Dr. Doofenshmirtz"
        width={550}
        height={550}
        className="absolute top-[50%] left-[82%] -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[28%] h-auto"
      />
      <Image
        src="/perry-the-platypus/perry-neutral.png"
        alt="Perry Neutral"
        width={600}
        height={600}
        onClick={handlePerryClick}
        className={`absolute top-[79%] left-[24%] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-300 w-[31%] h-auto ${
          isKicking ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src="/perry-the-platypus/perry-kick.png"
        alt="Perry Kick"
        width={600}
        height={600}
        className={`absolute top-[59%] left-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 w-[31%] h-auto ${
          isKicking ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />
      <Image
        src="/perry-the-platypus/action-pow.png"
        alt="Pow"
        width={400}
        height={400}
        className={`absolute top-[36%] left-[59%] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 w-[21%] h-auto ${
          showPow ? "opacity-100 scale-110" : "opacity-0 scale-50"
        }`}
      />
    </div>
  );
}
