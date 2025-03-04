import { HamburgerMenu } from "./components/HamburgerMenu";
import { MainMenu } from "./components/MainMenu";

export const Navbar = () => (
  <div className="bg-black/80 sticky top-0 z-10 sm:static">
    <MainMenu />
    <HamburgerMenu />
  </div>
);
