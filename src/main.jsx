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
import cardsProductLoader from "./cardsProductLoader/cardsProductLoader";
import Register from "./components/Register/Register";
import AuthProvider from "./provider/AuthProvider";
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
        loader: cardsProductLoader,
      },
      {
        path: "/orderReview",
        element: <OrderReview />,
        loader: cardsProductLoader,
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
        path: "/register",
        element: <Register />,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
