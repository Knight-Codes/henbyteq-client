import { cva } from "class-variance-authority";
import { HeaderText } from "./components/HeaderText";
import { Layout } from "./components/Layout";

const layoutStyles = cva("px-[4%] bg-[#121212] text-white py-16");

export const Innovations = () => (
  <section id="portfolio">
    <div className={layoutStyles()}>
      <HeaderText />
      <Layout />
    </div>
  </section>
);
