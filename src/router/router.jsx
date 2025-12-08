import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PopularWinterCareServices from "../components/homePageLayouts/PopularWinterCareServices";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../components/ServiceDetails";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,    // <-- সব পেজে navbar/footer থাকবে
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "winterCareServices",
        element: <PopularWinterCareServices />,
        loader: () => "/services.json",
      },
      {
        path: "service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },

  // AuthLayout separate (Navbar থাকবে না)
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "forgetPassword", element: <ForgotPassword /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },

  {
    path: "*",
    element: <h2 className="text-center mt-20 text-3xl">404 Not Found</h2>,
  },
]);

export default router;
