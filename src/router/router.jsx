import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import PopularWinterCareServices from "../components/homePageLayouts/PopularWinterCareServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
    // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      {
        path: "/winterCareServices",
        element: <PopularWinterCareServices></PopularWinterCareServices>,
        loader: () => "/services.json",
      },
    ],
  },
]);

export default router;
