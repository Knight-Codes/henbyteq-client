import { cva } from "class-variance-authority";
import { HeaderText } from "./HeaderText";
import { ExploreIndicator } from "./ExploreIndicator";

const containerStyles = cva(
  "relative z-10 flex flex-col sm:gap-12 items-center justify-center h-full text-white text-center pt-44"
);

const overlayStyles = cva(
  "mt-auto w-full h-24 bg-gradient-to-b from-black/5 via-black/50 to-black"
);

const textStyles = cva(
  "font-manrope text-lg sm:text-xl max-w-[300px] sm:max-w-[500px] tracking-widest text-center text-white/60 mt-12 sm:mt-8 mb-12"
);

export const TextContent = () => (
  <div className={containerStyles()}>
    <div className="text-center">
      <HeaderText>ELEVATE YOUR VISION, IGNITE</HeaderText>
      <br />
      <HeaderText>TOMORROW'S INNOVATION</HeaderText>
    </div>
    <p className={textStyles()}>
      Crafting Digital Excellence For a Future Beyond Imagination.
    </p>
    <ExploreIndicator />
    <div className={overlayStyles()} />
  </div>
);
