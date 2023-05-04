import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Main from "./components/layout/Main.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ViewRecipeButton from "./components/ViewRecipeButton";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
