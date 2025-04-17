import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartItem({ product }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="col-3">
      <div
        className="card shadow-sm "
        style={{
          maxHeight: "450px",
          margin: "20px 10px",
        }}
      >
        

        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => {
                removeFromCart(product);
              }}
            >
              Remove from cart
            </button>
            <p className="text-muted mt-3">{product.price}$</p>
          </div>
          <p className="text-muted mt-3">Quantity: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
