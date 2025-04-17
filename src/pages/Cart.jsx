import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Header from "../components/Header";
import Product from "../components/Product";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  console.log(totalPrice);
  console.log(cart);
  return (
    <div>
      <Header />
      <div className="container mt-4">
        {!cart.length && (
          <div className="alert alert-danger ">
            Your cart is empty
          </div>
        )}
        <h1>Cart:</h1>
        <div className="row">
          {cart.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        {cart.length > 0 && (
          <div >
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
