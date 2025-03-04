import { cva } from "class-variance-authority";
import { TextContent } from "./components/TextContent";
import { Layout } from "./components/Layout";
import { SectionHeader } from "@/components/modules/SectionHeader";

const containerStyles = cva(
  "bg-gradient-to-b from-black to-[#1E1E1E] text-white pb-24"
);

export const AboutUs = () => (
  <section id="company">
    <div className={containerStyles()}>
      <div className="pt-20 space-y-24 md:px-32 2xl:px-56">
        <SectionHeader
          section="Who We Are"
          title="Innovating Tomorrow, Engineered for Today"
        />
        <TextContent />
      </div>
    </div>
    <Layout />
  </section>
);
