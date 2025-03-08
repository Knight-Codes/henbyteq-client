import { useRoutes } from "react-router-dom";
import { HomeLayout } from "@/layouts/HomeLayout";
import { Careers } from "@/sections/Careers";
import { Home } from "@/sections/Home";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
      ],
    },
  ]);
  return routes;
};
