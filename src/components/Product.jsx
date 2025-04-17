import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const quantity = {
    ...product,
    quantity: 1,
  };
  const { addToCart } = useContext(CartContext);
  return (
    <div className="col-3">
      <div
        className="card shadow-sm "
        style={{
          maxHeight: "450px",
          margin: "20px 10px",
        }}
      >
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          src={product.image}
        />

        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={() => {
                  addToCart(quantity);
                }}
              >
                Add To Cart
              </button>
            </div>
            <p className="text-muted mt-3">{product.price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
