import { ConventionSVG } from "@/assets/svgs";

export const HeaderText = () => (
  <div className="pl-1">
    <div className="space-y-8">
      <div className="max-w-[250px] py-2 bg-[#262626] border border-[#484848] rounded-3xl flex items-center justify-center gap-2">
        <ConventionSVG className="w-4.5 h-4.5" />
        <p className="font-alegreya text-sm">Convention over Configuration</p>
      </div>
    </div>
    <div className="space-y-6 mt-4 pl-1">
      <p className="font-cinzel text-3xl">Our Innovations in Action</p>
      <p className="font-alegreya text-lg mt-4 max-w-[620px]">
        Explore how HENBYTEQ is transforming industries with AI, IoT, and
        sustainable technology, delivering smart, efficient, and future-ready
        solutions.
      </p>
    </div>
  </div>
);
