import "./styles/theme.css";
import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productsListLoader } from "./api/productsListLoader.js";
import { productLoader } from "./api/productLoader.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/home?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender?/:category?/:subcategory?",
        element: <ProductsList />,
        loader: productsListLoader,
      },
      {
        path: "/:gender?/:category?/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
