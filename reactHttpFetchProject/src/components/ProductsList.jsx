import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    // fetch("http://localhost:3000/Products")
    fetch("http://localhost:3000/Products/abcd")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => setErrMsg(err.toString()));
  }, []);
  // If there is error message then we will show the error message in the paragraph tag else we will display the products!!!
  return errMsg ? (
    <h2 className="text-center text-danger">{errMsg}</h2>
  ) : (
    <div className="text-center mx-auto">
      <h2>Products List</h2>
      <section className="mx-auto text-center">
        {products.map((product) => {
          return <Card key={product.id} productDetails={product} />;
        })}
      </section>
    </div>
  );
};

export default ProductsList;
