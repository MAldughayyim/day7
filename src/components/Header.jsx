import React from "react";
import { Link } from "react-router";
import { CartContext, useCart } from "../contexts/CartContext";

function Header() {
  const NavLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "User",
      url: "/user",
    },
    {
      title: "Cart",
      url: "/cart",
    },
  ];

  const { cart } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Shopping Cart App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NavLinks.map((item, index) => {
              if (item.title === "Cart") {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={item.url}
                    >
                      {item.title} ({cart.length})
                    </Link>
                  </li>
                );
              }

              return (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link className="navbar-text" to={"/login"}>
            <button className="btn ">Login</button>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
