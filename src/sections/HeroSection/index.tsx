import { cva } from "class-variance-authority";
import { BackdropVideo } from "./components/BackdropVideo";
import { TextContent } from "./components/TextContent";

const containerStyles = cva("relative w-full h-screen overflow-hidden");

const overlayStyles = cva("absolute top-0 left-0 w-full h-full bg-white/6");

export const HeroSection = () => (
  <div className={containerStyles()}>
    <BackdropVideo />
    <div className={overlayStyles()} />
    <TextContent />
  </div>
);
