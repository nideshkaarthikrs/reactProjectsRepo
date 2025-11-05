import React, { useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  // I have not destructured the setProducts function as we are not using it here
  const [products] = useState([
    {
      id: 1,
      name: "Mobile Phone",
      price: 100000,
    },
    {
      id: 2,
      name: "Water Bottle",
      price: 200,
    },
    {
      id: 3,
      name: "Watch",
      price: 3000,
    },
    {
      id: 4,
      name: "TV",
      price: 50000,
    },
  ]);
  const productsList = products.map((product) => {
    {/* for every array item being rendered, we have a key */}
    return (
      <Product key={product.id} pId = {product.id} pName = {product.name} pPrice = {product.price} />
    );
  });
  return <>{productsList}</>;
};

export default ProductsList;         
