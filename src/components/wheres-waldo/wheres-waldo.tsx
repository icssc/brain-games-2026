"use client";

import { useEffect, useRef, useState } from "react";
import {
  SPOTLIGHT_PCT,
  LOOP_DURATION,
  DANCE_SPEED,
  DANCE_X,
  DANCE_Y,
  DANCE_ROT,
  WALDO_CHAR,
  WALDO_PEEK_PCT,
  WALDO_SOLO_DURATION,
  WALDO_SOLO_BOUNCES,
  WALDO_SOLO_AMP,
  CELEBRATE_DURATION,
  CELEBRATE_BOUNCES,
  CELEBRATE_AMP,
  WALDO_DETECT_RADIUS,
  WALDO_CENTER_X,
} from "./config";
import { uniformT, lemniscatePoint } from "./spotlight-animation";
import { danceNoise } from "./dance-animation";
import { DiscoBackground } from "./disco-background";
import { DancingCharacters } from "./dancing-characters";
import { SpotlightReveal } from "./spotlight-reveal";
import { LightBeam } from "./light-beam";
import { SpotlightGlow } from "./spotlight-glow";

export function WheresWaldo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightPos, setLightPos] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ w: 1920, h: 1080 });
  const [waldoPeeking, setWaldoPeeking] = useState(false);
  const [waldoFound, setWaldoFound] = useState(false);
  const [waldoBounce, setWaldoBounce] = useState(0);
  const [celebrateBounce, setCelebrateBounce] = useState(0);
  const [danceTime, setDanceTime] = useState(0);
  const animRef = useRef<number>(0);
  const waldoFoundTimeRef = useRef<number>(0);
  const animStartRef = useRef<number>(0);
  const pausedProgressRef = useRef<number>(0);

  const spotlightSize = (SPOTLIGHT_PCT / 100) * containerSize.w;
  const spotlightRadius = spotlightSize / 2;

  const waldoTranslateY = waldoPeeking ? -(WALDO_PEEK_PCT + waldoBounce) : 0;

  const danceTransform = (i: number): string | undefined => {
    if (danceTime === 0) return undefined;
    const t = danceTime * DANCE_SPEED;
    const dx = danceNoise(t, i * 2.1) * DANCE_X;
    const dy = danceNoise(t, i * 3.7 + 0.5) * DANCE_Y;
    const rot = danceNoise(t, i * 1.3 + 1.0) * DANCE_ROT;
    const bounce =
      celebrateBounce > 0 ? `translateY(-${celebrateBounce}%) ` : "";
    return `${bounce}translateX(${dx}%) translateY(${dy}%) rotate(${rot}deg)`;
  };

  const handleWaldoClick = () => {
    if (waldoFound) return;
    const elapsed = Date.now() - animStartRef.current;
    pausedProgressRef.current = (elapsed % LOOP_DURATION) / LOOP_DURATION;
    setWaldoFound(true);
    waldoFoundTimeRef.current = Date.now();
  };

  useEffect(() => {
    if (animStartRef.current === 0) animStartRef.current = Date.now();

    const animate = () => {
      const el = containerRef.current;
      if (!el) {
        animRef.current = requestAnimationFrame(animate);
        return;
      }

      const rect = el.getBoundingClientRect();
      setContainerSize({ w: rect.width, h: rect.height });
      setDanceTime(Date.now() / 1000);

      if (waldoFoundTimeRef.current > 0) {
        const elapsed = Date.now() - waldoFoundTimeRef.current;
        const totalDuration = WALDO_SOLO_DURATION + CELEBRATE_DURATION;

        if (elapsed < WALDO_SOLO_DURATION) {
          const p = elapsed / WALDO_SOLO_DURATION;
          setWaldoBounce(
            Math.abs(Math.sin(p * WALDO_SOLO_BOUNCES * Math.PI)) *
              WALDO_SOLO_AMP *
              (1 - p)
          );
          setCelebrateBounce(0);
        } else if (elapsed < totalDuration) {
          const p = (elapsed - WALDO_SOLO_DURATION) / CELEBRATE_DURATION;
          const bounce =
            Math.abs(Math.sin(p * CELEBRATE_BOUNCES * Math.PI)) * CELEBRATE_AMP;
          setWaldoBounce(bounce);
          setCelebrateBounce(bounce);
        } else {
          setWaldoBounce(0);
          setCelebrateBounce(0);
          setWaldoFound(false);
          waldoFoundTimeRef.current = 0;
          animStartRef.current =
            Date.now() - pausedProgressRef.current * LOOP_DURATION;
        }
      } else {
        const elapsed = Date.now() - animStartRef.current;
        const progress = (elapsed % LOOP_DURATION) / LOOP_DURATION;
        const t = uniformT(progress);
        const { x: nx, y: ny } = lemniscatePoint(t);

        const lx = rect.width * (0.5 + nx * 0.35);
        const ly = rect.height * (0.48 + ny * 0.3);
        setLightPos({ x: lx, y: ly });

        const waldoX = rect.width * WALDO_CENTER_X;
        const sr = spotlightRadius * WALDO_DETECT_RADIUS;
        const dist = Math.abs(lx - waldoX);
        setWaldoPeeking(dist < sr);
        setWaldoBounce(0);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [spotlightRadius]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden select-none"
    >
      <DiscoBackground />

      <DancingCharacters
        waldoTranslateY={waldoTranslateY}
        waldoFound={waldoFound}
        danceTransform={danceTransform}
      />

      <SpotlightReveal
        spotlightRadius={spotlightRadius}
        lightPos={lightPos}
        waldoTranslateY={waldoTranslateY}
        waldoFound={waldoFound}
        danceTransform={danceTransform}
      />

      <div
        onClick={handleWaldoClick}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: WALDO_CHAR.left,
          top: WALDO_CHAR.top,
          width: spotlightSize,
          height: WALDO_CHAR.h,
          zIndex: 60,
          cursor: waldoPeeking && !waldoFound ? "pointer" : "default",
          pointerEvents: waldoPeeking && !waldoFound ? "auto" : "none",
        }}
      />

      {waldoFound && (
        <div
          className="absolute inset-0"
          style={{ zIndex: 200, cursor: "default" }}
        />
      )}

      <LightBeam
        containerSize={containerSize}
        lightPos={lightPos}
        spotlightRadius={spotlightRadius}
        waldoTranslateY={waldoTranslateY}
        waldoFound={waldoFound}
        danceTransform={danceTransform}
      />

      <SpotlightGlow lightPos={lightPos} spotlightSize={spotlightSize} />
    </div>
  );
}
