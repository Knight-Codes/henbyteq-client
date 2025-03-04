import { Fragment } from "react/jsx-runtime";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { MainMenu } from "./components/MainMenu";

export const Navbar = () => (
  <Fragment>
    <MainMenu />
    <HamburgerMenu />
  </Fragment>
);
