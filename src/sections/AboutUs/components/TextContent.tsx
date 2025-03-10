import AboutUsImg from "@/assets/images/about-us.png";

export const TextContent = () => (
  <div className="h-full flex flex-col items-center justify-center gap-8">
    <div className="px-4 flex flex-col sm:flex-row justify-center items-center gap-12 mt-4">
      <div className="relative">
        <img
          src={AboutUsImg}
          alt="group discussion"
          className="w-[550px] h-[280px] sm:h-[350px] rounded-xl"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="space-y-8">
        <p className="text-left text-xl sm:text-2xl font-manope font-medium sm:w-[500px] leading-9">
          To lead the future of AI, IoT, and sustainable technology by
          delivering high-efficiency, user-friendly, and intelligent solutions
          that enhance daily life and business operations.
        </p>

        <p className="text-left text-md font-manrope font-normal text-[#8C8787] sm:w-[500px] leading-7">
          HENBYTEQ is a cutting-edge technology company focused on AI-driven
          productivity tools, smart IoT solutions, next-gen service experiences,
          and sustainable consumer products. Our website will reflect our
          commitment to innovation, efficiency, and human-centric design.
        </p>
      </div>
    </div>
  </div>
);
