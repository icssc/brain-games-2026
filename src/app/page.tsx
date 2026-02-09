import { SpyFamilyHero } from "@/components/spy-family";
import { Perry } from "@/components/perry";
import { WheresWaldo } from "@/components/wheres-waldo";
import { Faq } from "@/components/ui/faq";
import { Rules } from "@/components/ui/rules";
import { Events } from "@/components/ui/events";
import { About } from "@/components/ui/about";

export default function Home() {
  return (
    <div>
      <SpyFamilyHero />
      <div className="relative shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none backdrop-blur-xl bg-gradient-to-b from-black/30 to-transparent z-10" />
        <div className="w-full bg-gradient-to-b from-[#004060] to-[#071c4e]">
          <About />
          <Events />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none backdrop-blur-xl bg-gradient-to-t from-black/30 to-transparent z-10" />
      </div>
      <WheresWaldo />
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none backdrop-blur-xl bg-gradient-to-b from-black/50 to-transparent z-10" />
        <div className="w-full bg-gradient-to-b from-[#1d2d48] to-[#423257]">
          <Rules />
          <Faq />
        </div>
      </div>
      <Perry />
    </div>
  );
}
