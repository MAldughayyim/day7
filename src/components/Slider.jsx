import React from "react";

import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";

function Slider() {
  return (
    <>
      <h1 className="text-center mb-3">Best Products</h1>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"}
                className="d-block w-100"
                height="550px"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                className="d-block w-100"
                height="550px"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpgs"}
                className="d-block w-100"
                height="550px"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
