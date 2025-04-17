import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const FetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <h3 className="text-center m-3"> Product List </h3>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
