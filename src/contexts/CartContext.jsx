import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const initialCart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    //check if product already exists in cart
    const existingProduct = cart.find((cartItem) => cartItem.id === product.id);
    //if product already exists in cart, increase quantity by 1
    if (existingProduct) {
      const updateCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });
      setCart(updateCart);
      //if product does not exist in cart, add it to cart
    } else {
      setCart((prev) => [...prev, product]);
    }
    toast.success("Product added successfully!");
  };

  //remove from cart
  const removeFromCart = (product) => {
    // check if product quantity is greater than 1
    toast.warning("Product removed successfully!");
    if (product.quantity > 1) {
      const updateCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return {
            ...cartItem,
            // decrease quantity by 1
            quantity: cartItem.quantity - 1,
          };
        } else {
          return cartItem;
        }
      });
      setCart(updateCart);
      return;
    } else {
      // if product quantity is 1, remove it from cart
      setCart((prev) => prev.filter((cartItem) => cartItem.id !== product.id));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartContext, CartContextProvider, useCart };
