import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className="text-muted text-red py-5 ">
        <div className="container">
          <p className="float-end mb-1 ">
            <Link to={"/"}>Back to top</Link>
          </p>
          <p className="mb-1">Shopping Cart App &copy; Tuwaiq React 2025</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
