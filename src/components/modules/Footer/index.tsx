import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <div className="w-full bg-[#121212] flex justify-center h-20 py-8 pb-24 md:px-10">
      <div className="px-4 w-full">
        <Separator className="w-full bg-white/30 h-[2px]" />
        <p className="text-[#9C9C9C] text-sm mt-4 text-center">
          © 2025 HENBYTEQ. All right reserved.
        </p>
      </div>
    </div>
  );
};
