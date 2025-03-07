import { cva } from "class-variance-authority";
import { SectionHeader } from "@/components/modules/SectionHeader";
import { Layout } from "./components/Layout";

const containerStyles = cva(
  "bg-gradient-to-b from-[#161616] to-[#1c1c1c] text-white py-24"
);

export const OurSolutions = () => (
  <section id="services">
    <div className={containerStyles()}>
      <SectionHeader
        section="Discover Our Solutions"
        title="Experience AI-powered innovation that enhances everyday life."
      />
      <Layout />
    </div>
  </section>
);
