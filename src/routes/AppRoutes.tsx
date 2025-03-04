import { useRoutes } from "react-router-dom";
import { HomeLayout } from "@/layouts/HomeLayout";
import { Careers } from "@/sections/Careers";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
    },
    {
      path: "/careers",
      element: <Careers />,
    },
  ]);
  return routes;
};
