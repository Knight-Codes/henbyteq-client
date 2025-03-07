import { ChevronDown } from "lucide-react";

export const ExploreIndicator = () => (
  <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2">
    <div className="animate-bounce [animation-duration:3s] cursor-pointer">
      <a href="#company" className="flex flex-col items-center">
        <p className="font-cinzel text-lg tracking-widest text-center text-slate-200">
          Explore
        </p>
        <ChevronDown className="text-slate-200 w-8 h-8 text-center" />
      </a>
    </div>
  </div>
);
