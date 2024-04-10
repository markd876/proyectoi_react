import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Admin from "./pages/Admin.jsx";
import Carrito from "./pages/Carrito.jsx";
import Checkout from "./pages/Checkout.jsx";
import Producto from "./pages/Producto.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Configuracion from "./pages/Configuracion.jsx";
import Categoria from "./pages/Categoria.jsx"
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { UserContext, UserContextProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/producto/:id",
    element: <Producto />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/configuracion",
    element: <Configuracion />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/categoria",
    element: <Categoria/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <React.StrictMode>
      <UserContextProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserContextProvider>
    </React.StrictMode>
  </NextUIProvider>
);
