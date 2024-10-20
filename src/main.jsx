import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import NotFound from "./pages/NotFound";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: "/:id",
    element: <Redirect/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);