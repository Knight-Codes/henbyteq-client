import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/modules/Navbar";
import { Footer } from "@/components/modules/Footer";

export const HomeLayout = () => (
  <Fragment>
    <Navbar />
    <Outlet />
    <Footer />
  </Fragment>
);
