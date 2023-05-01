import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Main from './components/layout/Main.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
