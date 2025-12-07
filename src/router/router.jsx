import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PopularWinterCareServices from "../components/homePageLayouts/PopularWinterCareServices";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../components/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/winterCareServices",
        element: <PopularWinterCareServices></PopularWinterCareServices>,
        loader: () => "/services.json",
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/forgetPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/auth/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/service/:id",
    element: (
      <PrivateRoute>
        <ServiceDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: (
      <h2 className="text-[#131952] text-center text-4xl font-semibold mt-90">
        Error 404
      </h2>
    ),
  },
]);

export default router;
