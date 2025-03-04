import { Fragment } from "react/jsx-runtime";
import { Navbar } from "@/components/modules/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutUs } from "@/sections/AboutUs";
import { CoreValues } from "@/sections/CoreValues";
import { OurSolutions } from "@/sections/OurSolutions";
import { Innovations } from "@/sections/Innovations";
import { GetInTouch } from "@/sections/GetInTouch";
import { Footer } from "@/components/modules/Footer";

export const HomeLayout = () => (
  <Fragment>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <CoreValues />
    <OurSolutions />
    <Innovations />
    <GetInTouch />
    <Footer />
  </Fragment>
);
