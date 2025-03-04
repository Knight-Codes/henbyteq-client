import { Fragment } from "react/jsx-runtime";
import { Separator } from "@/components/ui/separator";
import GroupDiscussion from "@/assets/group-discussion.jpg";

const metrics = [
  {
    primary: "50+",
    secondary: "Projects Completed",
  },
  {
    primary: "6+",
    secondary: "Successful Years",
  },
  {
    primary: "98%",
    secondary: "Client Retention",
  },
  {
    primary: "30+",
    secondary: "Countries",
  },
];

const MetricCard = ({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[200px] sm:min-w-[200px]">
      <h2 className="text-3xl font-cinzel text-white">{primary}</h2>
      <p className="text-lg font-manrope text-[#9C9C9C] tracking-wider">
        {secondary}
      </p>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <section id="company">
      <div className="bg-gradient-to-b from-black to-[#1E1E1E]">
        <div className="bg-gradient-to-b from-black to-[#1E1E1E] text-white pb-24">
          <div className="pt-28 space-y-24 md:px-32 2xl:px-56">
            <div className="text-center">
              <h3 className="text-gray-400 mb-2 tracking-wider text-md font-manrope">
                Who We Are
              </h3>
              <h2 className="text-4xl text-white/80 tracking-wider font-light font-cinzel mt-6">
                Innovating Tomorrow, Engineered for Today
              </h2>
            </div>

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
                  To lead the future of AI, IoT, and sustainable technology by
                  delivering high-efficiency, user-friendly, and intelligent
                  solutions that enhance daily life and business operations.
                </p>

                <p className="text-xl tracking-widest font-alegreya text-[#8C8787] sm:max-w-[520px] sm:pr-8 mt-8 ms:mt-0 sm:text-left">
                  HENBYTEQ is a cutting-edge technology company focused on
                  AI-driven productivity tools, smart IoT solutions, next-gen
                  service experiences, and sustainable consumer products. Our
                  website will reflect our commitment to innovation, efficiency,
                  and human-centric design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row items-center justify-between flex-wrap bg-[#121212] gap-8 md:px-32 2xl:px-60">
          {metrics.map((metric, index) => (
            <Fragment key={index}>
              <MetricCard
                primary={metric.primary}
                secondary={metric.secondary}
              />
              {index !== metrics.length - 1 && (
                <Separator className="w-[100px] sm:h-[64px] sm:w-[1px] bg-white" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
