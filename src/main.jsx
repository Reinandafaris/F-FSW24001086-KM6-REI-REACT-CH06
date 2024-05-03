import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CarsContextProvider from "./context/CarsContext.jsx";

import HomePage from "./pages/home.jsx";
import FilterPage from "./pages/filter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />,
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
