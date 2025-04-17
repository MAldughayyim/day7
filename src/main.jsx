import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Route, Routes } from "react-router";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.js";

import { CartContext } from "./context/cartContext.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContext>
  </StrictMode>
);
