import { CalendarIcon, MapPinnedIcon } from "lucide-react";

export function BrainGamesHeader({ scrollY = 0 }: { scrollY?: number }) {
  const detailsStart = 1400;
  const detailsEnd = 1800;
  const detailsOpacity =
    scrollY < detailsStart
      ? 0
      : scrollY > detailsEnd
        ? 1
        : (scrollY - detailsStart) / (detailsEnd - detailsStart);

  return (
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[80%] lg:w-[60%] 2xl:w-[40%]">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
          Brain Games
        </h1>
        <p className="text-3xl text-white/90 mb-8 font-normal">
          ICS Student Council&apos;s competition challenging your creativity and
          problem-solving!
        </p>

        {/* Desktop: fade in on scroll */}
        <div
          className="hidden lg:block transition-all duration-300"
          style={{
            opacity: detailsOpacity,
            transform: `translateY(${20 - detailsOpacity * 20}px)`,
          }}
        >
          <div className="space-y-3 mb-8">
            <p className="text-3xl text-white/90 font-normal flex items-center justify-center gap-3">
              <CalendarIcon className="w-7 h-7" />
              Saturday, February 21st
            </p>
            <p className="text-3xl text-white/90 font-normal flex items-center justify-center gap-3">
              <MapPinnedIcon className="w-7 h-7" />
              Doheny Beach A - Student Center
            </p>
          </div>

          <a
            href="https://forms.gle/oDXxPSqqG1LiDwa47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#d06a40] hover:bg-[#b85a34] text-white font-black text-lg md:text-xl px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 drop-shadow-lg cursor-pointer">
              RSVP Now
            </button>
          </a>
        </div>

        {/* Mobile/Tablet: always visible */}
        <div className="lg:hidden">
          <div className="space-y-3 mb-8">
            <p className="text-3xl text-white/90 font-normal flex items-center justify-center gap-3">
              <CalendarIcon className="w-7 h-7" />
              Saturday, February 21st
            </p>
            <p className="text-3xl text-white/90 font-normal flex items-center justify-center gap-3">
              <MapPinnedIcon className="w-7 h-7" />
              Doheny Beach A - Student Center
            </p>
          </div>

          <a
            href="https://forms.gle/oDXxPSqqG1LiDwa47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#d06a40] hover:bg-[#b85a34] text-white font-black text-lg md:text-xl px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 drop-shadow-lg cursor-pointer">
              RSVP Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
