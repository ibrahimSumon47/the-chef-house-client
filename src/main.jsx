import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ViewRecipeButton from "./components/Recipe/ViewRecipeButton";
import Blog from "./components/Blog";
import EmailAndPassword from "./components/Login/EmailAndPassword";
import Register from "./components/Register.jsx/Register";
import Home from "./components/shared/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/chef_details/:id",
        element: <ViewRecipeButton/>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef_details/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/login",
        element: <EmailAndPassword/>
      },
      {
        path:"/register",
        element: <Register/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
