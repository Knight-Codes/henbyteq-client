import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  StarsSVG,
  CheckShieldSVG,
  PuzzlePieceSVG,
  WorkflowSVG,
} from "@/assets/svgs";

const coreValues = [
  {
    icon: StarsSVG,
    title: "Innovative Excellence",
    contents: "Continuously pushing technological boundaries.",
  },
  {
    icon: CheckShieldSVG,
    title: "User-Centric",
    contents: "Designing solutions that prioritize human needs.",
  },
  {
    icon: PuzzlePieceSVG,
    title: "Responsibility",
    contents: "Building a greener and smarter future.",
  },
  {
    icon: WorkflowSVG,
    title: "Integrity",
    contents: "Commitment to ethical and reliable practices.",
  },
];
const CoreValueCard = ({
  title,
  contents,
  icon: Icon,
}: {
  title: string;
  contents: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-between bg-white/5 min-h-[364px] pt-12 pb-8 px-6 rounded-lg border border-white/5 hover:border-white">
      <Icon className="w-14 h-14" />
      <h1 className="font-alegreya tracking-wide text-2xl bg-gradient-to-r from-white to-white/60 inline-block text-transparent bg-clip-text mt-4">
        {title}
      </h1>
      <Separator className="w-[120px] bg-white h-[1px]" />
      <p className="text-left font-manrope text-xl font-light leading-8">
        {contents}
      </p>
    </div>
  );
};

export const CoreValues = () => {
  return (
    <div className="bg-gradient-to-br from-[#242424] via-[#121212] to-black/50 text-white py-24">
      <div className="text-center flex flex-col items-center mb-24">
        <h3 className="text-gray-400 mb-2 tracking-wider text-md font-alegreya">
          Core Values
        </h3>

        <h2 className="text-white/80 text-xl sm:text-3xl tracking-wider font-cinzel mt-4 max-w-[800px] px-4">
          Excellence Redefined: Unleashing Tailored Solutions for Your Success
          Journey.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-10 2xl:px-50">
        {coreValues.map((value, index) => (
          <CoreValueCard
            key={index}
            title={value.title}
            contents={value.contents}
            icon={value.icon}
          />
        ))}
      </div>
    </div>
  );
};
