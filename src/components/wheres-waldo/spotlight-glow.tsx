"use client";

interface SpotlightGlowProps {
  lightPos: { x: number; y: number };
  spotlightSize: number;
}

export function SpotlightGlow({ lightPos, spotlightSize }: SpotlightGlowProps) {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={`glow-${i}`}
          className="pointer-events-none rounded-full"
          style={{
            position: "absolute",
            left: lightPos.x - spotlightSize / 2,
            top: lightPos.y - spotlightSize / 2,
            width: spotlightSize,
            height: spotlightSize,
            zIndex: 99,
            background: "rgba(223, 153, 22, 0.35)",
            filter: "blur(5px)",
            mixBlendMode: "screen",
          }}
        />
      ))}
      <div
        className="pointer-events-none rounded-full"
        style={{
          position: "absolute",
          left: lightPos.x - spotlightSize / 2,
          top: lightPos.y - spotlightSize / 2,
          width: spotlightSize,
          height: spotlightSize,
          zIndex: 98,
          background: "rgba(251, 121, 0, 0.31)",
          filter: "blur(15px)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
