import { Briefcase } from "lucide-react";

export const Careers = () => {
  return (
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('@/assets/images/careers.jpg')] h-[360px]">
      <div className="absolute inset-0 bg-black/50" />
      <div className="mt-6 relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-xl">
        <p className="font-manrope text-2xl">Careers at</p>
		<p className="font-cinzel text-3xl">HENBYTEQ</p>
      </div>
      <div className="pt-20 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
		<p className="font-manrope text-xl mt-4 text-white max-w-[300px] text-center">Sorry, we dont have any open positions at the moment</p>
      </div>
    </div>
  );
};
