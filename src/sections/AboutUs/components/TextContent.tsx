import GroupDiscussion from "@/assets/group-discussion.jpg";

export const TextContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 px-4">
    <div className="relative">
      <img
        src={GroupDiscussion}
        alt="Group Discussion"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="py-2 h-full flex flex-col justify-center gap-8">
      <p className="text-xl sm:text-2xl font-alegreya font-normal sm:max-w-[530px] sm:text-left leading-9">
        To lead the future of AI, IoT, and sustainable technology by delivering
        high-efficiency, user-friendly, and intelligent solutions that enhance
        daily life and business operations.
      </p>

      <p className="text-xl tracking-widest font-alegreya text-[#8C8787] sm:max-w-[520px] sm:pr-8 mt-8 ms:mt-0 sm:text-left">
        HENBYTEQ is a cutting-edge technology company focused on AI-driven
        productivity tools, smart IoT solutions, next-gen service experiences,
        and sustainable consumer products. Our website will reflect our
        commitment to innovation, efficiency, and human-centric design.
      </p>
    </div>
  </div>
);
