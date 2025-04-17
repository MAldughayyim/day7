import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <>
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Shopping Cart App </h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p className="text-center">
            <Link to="/products" className="btn btn-primary my-2">
              Go To Products
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
