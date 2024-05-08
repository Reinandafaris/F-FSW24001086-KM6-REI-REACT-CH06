import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CarsContextProvider from "./context/CarsContext.jsx";

import HomePage from "./pages/home.jsx";
import FilterPage from "./pages/filter.jsx";
import Login from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/filter",
    element: <FilterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarsContextProvider>
      <RouterProvider router={router} />
    </CarsContextProvider>
  </React.StrictMode>
);
