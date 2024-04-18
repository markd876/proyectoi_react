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
import Categoria from "./pages/Categoria.jsx";
import RequireAuth from './components/RequireAuth.jsx'
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";
import { useUserContext } from "./context/userContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <React.StrictMode>
      <UserContextProvider>
        <CartProvider>
          <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route element={<RequireAuth/>}>
                <Route path="/admin" element={<Admin />}/>
              </Route>
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/producto/:id" element={<Producto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard/:url?" element={<Dashboard />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/categoria/:id" element={<Categoria />} />
            </Routes>
          </Router>
        </CartProvider>
      </UserContextProvider>
    </React.StrictMode>
  </NextUIProvider>
);