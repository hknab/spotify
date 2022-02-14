import React from "react";
import MainLayout from "layout/main";
import LazyLoader from "components/LazyLoader";
const Home = LazyLoader(React.lazy(() => import("pages/Home")));
const Playlist = LazyLoader(React.lazy(() => import("pages/Playlist")));
const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/playlist/:id",
      element: <Playlist />,
    },
  ],
};
export default MainRoutes;
