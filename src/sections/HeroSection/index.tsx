import { ChevronDown } from "lucide-react";
// import Earth from "@/assets/video/earth.mp4";

const HeaderText = ({ children }: { children: React.ReactNode }) => (
  <h1 className="mt-4 font-cinzel text-4xl sm:text-5xl tracking-widest bg-gradient-to-r from-white to-white/40 inline-block text-transparent bg-clip-text uppercase leading-12">
    {children}
  </h1>
);

export const HeroSection = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute top-[-56px] inset-0 bg-cover bg-center bg-no-repeat bg-[url('@/assets/hero-earth.png')] -z-10" />
      <div className="h-full flex flex-col items-center justify-start bg-black/25 pt-8">
        <div className="text-center pt-8 xxs:pt-6">
          <HeaderText>elevate your vision ignite,</HeaderText>
          <br />
          <HeaderText>tomorrow's innovation</HeaderText>
        </div>
        <p className="font-manrope text-xl max-w-[500px] tracking-widest text-center text-white/60 mt-20 sm:mt-8">
          Crafting Digital Excellence For a Future Beyond Imagination.
        </p>
        <div className="mt-auto animate-bounce [animation-duration:3s] cursor-pointer pb-20 xxs:pb-4 sm:pb-20">
          <a href="#company" className="flex flex-col items-center">
            <p className="font-cinzel text-lg tracking-widest text-center text-slate-200">
              Scroll
            </p>
            <ChevronDown className="text-slate-200 w-8 h-8 text-center" />
          </a>
        </div>
        <div className="w-full h-20 bg-gradient-to-b from-black/5 via-black/50 to-black" />
      </div>
    </div>
  );
};
