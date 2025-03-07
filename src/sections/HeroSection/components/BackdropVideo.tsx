import { cva } from "class-variance-authority";
import DarkEarth from "@/assets/video/earth.mp4";

const containerStyles = cva(
  "absolute top-6 left-0 w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover"
);

export const BackdropVideo = () => (
  <video className={containerStyles()} autoPlay loop muted playsInline>
    <source src={DarkEarth} type="video/mp4" />
  </video>
);
