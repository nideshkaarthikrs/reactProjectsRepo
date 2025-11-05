import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const ProductListWithOptions = () => {
  const [products, setProducts] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [url, setUrl] = useState("http://localhost:3000/Products");
  useEffect(() => {
    fetch(url)
      // fetch("http://localhost:3000/Products/abcd") // error message will be displayed
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => setErrMsg(err.toString()));
  }, [url]);
  // If there is error message then we will show the error message in the paragraph tag else we will display the products!!!
  return errMsg ? (
    <h2 className="text-center text-danger">{errMsg}</h2>
  ) : (
    <div className="text-center mx-auto">
      <h2>Products List</h2>

      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <button className="btn btn-primary" onClick={() => setUrl("http://localhost:3000/Products")}>All</button>&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={() => setUrl("http://localhost:3000/Products?_sort=price")}>Price Asc</button>&nbsp;&nbsp;
        <button className="btn btn-warning" onClick={() => setUrl("http://localhost:3000/Products?_sort=-price")}>Price Desc</button>&nbsp;&nbsp;
        <button className="btn btn-info" onClick={() => setUrl("http://localhost:3000/Products?inStock=true")}>Products in-stock</button>&nbsp;&nbsp;
        <button className="btn btn-success" onClick={() => setUrl("http://localhost:3000/Products?inStock=false")}>Products out-of-stock</button>
      </div>

      <section className="mx-auto text-center">
        {products.map((product) => {
          return <Card key={product.id} productDetails={product} />;
        })}
      </section>
    </div>
  );
};

export default ProductListWithOptions;
