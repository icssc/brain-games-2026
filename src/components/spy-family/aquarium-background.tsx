"use client";

import { calculateZoomLevel } from "./animation-utils";
import { useState, useEffect } from "react";

interface AquariumBackgroundProps {
  scrollY: number;
}

export function AquariumBackground({ scrollY }: AquariumBackgroundProps) {
  const zoomLevel = calculateZoomLevel(scrollY);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/spy-family/background-cropped.png')] transition-transform duration-100"
      style={{
        transform: isLargeScreen ? `scale(${zoomLevel})` : "scale(1)",
        transformOrigin: "center center",
      }}
    />
  );
}
