import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Order from "./components/Order";
import OrderReview from "./components/OrderReview";
import ManageInventory from "./components/ManageInventory";
import LogIn from "./components/LogIn";
import Error from "./components/Error/Error";
import ProductDetails from "./components/ProductDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/orderReview",
        element: <OrderReview />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/inventory",
        element: <ManageInventory />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
