import { cva } from "class-variance-authority";
import { SectionHeader } from "@/components/modules/SectionHeader";
import { Layout } from "./components/Layout";

const containerStyles = cva(
  "bg-gradient-to-bl from-[#242424] via-[#121212] to-[#1c1c1c] text-white py-24"
);

export const CoreValues = () => (
  <div className={containerStyles()}>
    <SectionHeader
      section="Core Values"
      title="Excellence Redefined: Unleashing Tailored Solutions for Your Success Journey."
    />
    <Layout />
  </div>
);
