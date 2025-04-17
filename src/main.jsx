import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./contexts/CartContext.jsx";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import User from "./pages/User.jsx";
import UsersList from "./components/UsersList.jsx";
import AddUser from "./components/AddUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";


createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<User />}>
          <Route index element={<UsersList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="update/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </CartContextProvider>
);
