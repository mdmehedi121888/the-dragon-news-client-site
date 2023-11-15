import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import MidNav from "./components/MidNav.jsx";
import Category from "./components/Category.jsx";
import NewsDetails from "./components/NewsDetails.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/0"}></Navigate>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <MidNav></MidNav>,
        loader: ({ params }) =>
          fetch(
            `https://the-dragon-news-server-site.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://the-dragon-news-server-site.vercel.app/news/${params.id}`),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </AuthProvider>
);
