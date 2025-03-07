import { Fragment } from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutUs } from "@/sections/AboutUs";
import { CoreValues } from "@/sections/CoreValues";
import { OurSolutions } from "@/sections/OurSolutions";
import { Innovations } from "@/sections/Innovations";
import { GetInTouch } from "@/sections/GetInTouch";

export const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutUs />
      <CoreValues />
      <OurSolutions />
      <Innovations />
      <GetInTouch />
    </Fragment>
  );
};
