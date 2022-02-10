import React from "react";
import MainLayout from "layout/main";
import LazyLoader from "components/LazyLoader";
const Home = LazyLoader(React.lazy(() => import("pages/Home")));
const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};
export default MainRoutes;
