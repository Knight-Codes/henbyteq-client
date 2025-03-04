import { useState } from "react";
import { cva } from "class-variance-authority";
import { ExpandArrowSVG, CollapseArrowSVG } from "@/assets/svgs";

const cardTitleStyle = cva(
  "max-w-[280px] sm:max-w-[100%] font-cinzel tracking-wide text-xl sm:text-3xl bg-gradient-to-r from-white to-white/30 inline-block text-transparent bg-clip-text mt-4"
);

const cardContentStyle = cva(
  "overflow-hidden transition-all duration-500 ease-in-out",
  {
    variants: {
      isExpanded: {
        true: "max-h-[1000px] opacity-100",
        false: "max-h-0 opacity-0",
      },
    },
  }
);

const descriptionStyle = cva(
  "mt-12 text-[#9C9C9C] text-left font-manrope text-lg font-light leading-8 max-w-[768px] border-l-2 border-l-white/60 pl-8"
);

const infographicContainerStyle = cva(
  "w-full mt-12 flex flex-col sm:flex-row items-start justify-between gap-12"
);

export const Card = ({
  index,
  title,
  description,
  infographics,
}: {
  index: number;
  title: string;
  description?: string;
  infographics: { label: string; image: string }[];
}) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  return (
    <div className="w-full py-8 px-2">
      <div className="w-full flex items-center justify-between">
        <h1 className={cardTitleStyle()}>
          <span className="mr-2 sm:mr-16">0{index + 1}</span> {title}
        </h1>

        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <CollapseArrowSVG className="transition-transform duration-300" />
          ) : (
            <ExpandArrowSVG className="transition-transform duration-300" />
          )}
        </div>
      </div>

      <div className={cardContentStyle({ isExpanded })}>
        {description && <p className={descriptionStyle()}>{description}</p>}

        <div className={infographicContainerStyle()}>
          {infographics.map((infographic, infographicIndex) => (
            <div key={infographicIndex} className="relative">
              <img
                src={infographic.image}
                alt={infographic.label}
                className="w-full h-[200px] object-cover bg-black/80"
              />
              <div className="absolute inset-0 bg-black/50" />
              <p className="capitalize text-center font-alegreya text-xl font-medium leading-7 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[150px]">
                {infographic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
