import { useRoutes } from "react-router-dom";
import { HomeLayout } from "@/layouts/HomeLayout";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
    },
  ]);
  return routes;
};
